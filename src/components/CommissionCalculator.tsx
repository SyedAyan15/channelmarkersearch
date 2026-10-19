"use client";

import { useState } from "react";

const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function Slider({
  id,
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (n: number) => string;
  onChange: (n: number) => void;
}) {
  const fill = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-semibold text-ink">
          {label}
        </label>
        <output htmlFor={id} className="text-lg font-semibold tabular-nums text-navy">
          {format(value)}
        </output>
      </div>
      <input
        id={id}
        type="range"
        className="range mt-3"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ "--fill": `${fill}%` } as React.CSSProperties}
      />
    </div>
  );
}

/** Estimates total earnings from base, target variable, attainment and accelerator. */
export function CommissionCalculator() {
  const [base, setBase] = useState(130000);
  const [variable, setVariable] = useState(130000);
  const [attainment, setAttainment] = useState(110);
  const [accelerator, setAccelerator] = useState(1.5);

  const ote = base + variable;
  const upTo100 = variable * (Math.min(attainment, 100) / 100);
  const above100 = attainment > 100 ? variable * ((attainment - 100) / 100) * accelerator : 0;
  const commission = upTo100 + above100;
  const total = base + commission;
  const max = Math.max(total, ote) * 1.05;

  const bars = [
    { label: "Base", value: base, cls: "bg-navy" },
    { label: "Commission to 100%", value: upTo100, cls: "bg-sky-dark" },
    { label: "Accelerated (above 100%)", value: above100, cls: "bg-sky" },
  ];

  return (
    <div className="grid gap-8 rounded-2xl border border-line bg-white p-6 sm:p-10 lg:grid-cols-2 lg:gap-14">
      <div className="space-y-8">
        <Slider
          id="calc-base"
          label="Base salary"
          value={base}
          min={50000}
          max={250000}
          step={5000}
          format={usd}
          onChange={setBase}
        />
        <Slider
          id="calc-variable"
          label="Variable at 100% of quota"
          value={variable}
          min={10000}
          max={300000}
          step={5000}
          format={usd}
          onChange={setVariable}
        />
        <Slider
          id="calc-attainment"
          label="Quota attainment"
          value={attainment}
          min={40}
          max={200}
          step={5}
          format={(n) => `${n}%`}
          onChange={setAttainment}
        />
        <fieldset>
          <legend className="text-sm font-semibold text-ink">Accelerator above 100%</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {[1, 1.5, 2, 3].map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setAccelerator(a)}
                aria-pressed={accelerator === a}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                  accelerator === a ? "border-navy bg-navy text-white" : "border-line text-ink hover:border-navy/50"
                }`}
              >
                {a}x
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="flex flex-col justify-between rounded-xl bg-mist p-6 sm:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-dark">Estimated total earnings</p>
          <p
            className="mt-2 text-4xl font-semibold tabular-nums text-ink transition-all sm:text-5xl"
            aria-live="polite"
          >
            {usd(total)}
          </p>
          <p className="mt-2 text-body">
            OTE {usd(ote)} ·{" "}
            <span className={total >= ote ? "font-semibold text-sky-dark" : "font-semibold text-red-700"}>
              {total >= ote ? "+" : "−"}
              {usd(Math.abs(total - ote))} vs OTE
            </span>
          </p>
        </div>

        <div className="mt-8">
          <div className="relative flex h-5 overflow-hidden rounded-full bg-white" aria-hidden="true">
            {bars.map((b) => (
              <span
                key={b.label}
                className={`${b.cls} h-full transition-[width] duration-500 ease-out`}
                style={{ width: `${(b.value / max) * 100}%` }}
              />
            ))}
            <span
              className="absolute inset-y-0 w-0.5 bg-ink/60 transition-[left] duration-500"
              style={{ left: `${(ote / max) * 100}%` }}
              title="OTE"
            />
          </div>
          <ul className="mt-5 space-y-2 text-sm">
            {bars.map((b) => (
              <li key={b.label} className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2 text-body">
                  <span className={`h-3 w-3 rounded-sm ${b.cls}`} /> {b.label}
                </span>
                <span className="font-semibold tabular-nums text-ink">{usd(b.value)}</span>
              </li>
            ))}
            <li className="flex items-center justify-between gap-4 border-t border-line pt-2">
              <span className="flex items-center gap-2 text-body">
                <span className="h-3 w-0.5 bg-ink/60" /> On-target earnings
              </span>
              <span className="font-semibold tabular-nums text-ink">{usd(ote)}</span>
            </li>
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-body">
            A simplified estimate. Real comp plans may include caps, tiers, SPIFs or draws.
          </p>
        </div>
      </div>
    </div>
  );
}
