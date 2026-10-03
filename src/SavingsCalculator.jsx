import { useState } from "react";
import { Calculator, Leaf, Package, IndianRupee } from "lucide-react";

// Gross calorific value of our pellets (from the product spec sheet).
const PELLET_GCV = 4603; // kcal/kg

// Typical values for the fuels industrial boilers in the region switch from.
// CO2 is fossil CO2 only; firewood is biomass, so no fossil CO2 is counted.
const FUELS = {
  coal: { label: "Coal", gcv: 4000, co2PerKg: 1.59, examplePrice: 9 },
  firewood: { label: "Firewood", gcv: 3500, co2PerKg: 0, examplePrice: 7 },
  furnaceOil: { label: "Furnace oil", gcv: 10000, co2PerKg: 3.24, examplePrice: 45 },
};

const formatNumber = (n, digits = 1) =>
  n.toLocaleString("en-IN", { maximumFractionDigits: digits });

function SavingsCalculator() {
  const [fuel, setFuel] = useState("coal");
  const [tonnes, setTonnes] = useState("10");
  const [fuelPrice, setFuelPrice] = useState("");
  const [pelletPrice, setPelletPrice] = useState("");

  const current = FUELS[fuel];
  const qty = Math.max(parseFloat(tonnes) || 0, 0);

  // Pellets needed to deliver the same heat.
  const pelletTonnes = (qty * current.gcv) / PELLET_GCV;
  const co2Tonnes = qty * current.co2PerKg;

  const fp = parseFloat(fuelPrice);
  const pp = parseFloat(pelletPrice);
  const hasPrices = fp > 0 && pp > 0;
  const currentCost = qty * 1000 * fp;
  const pelletCost = pelletTonnes * 1000 * pp;
  const monthlySaving = currentCost - pelletCost;

  return (
    <section id="calculator" className="calculator-section">

      <div className="container">

        <div className="section-heading">

          <div className="section-tag">
            SAVINGS CALCULATOR
          </div>

          <h2 className="section-title">
            What Would Switching Save You?
          </h2>

          <p className="calculator-subtitle">
            Enter your current monthly fuel use to see how many pellets you
            would need and how much CO₂ you would avoid.
          </p>

        </div>

        <div className="calculator-layout">

          {/* INPUTS */}

          <div className="calculator-card calculator-inputs">

            <h3>
              <Calculator size={22} /> Your current fuel
            </h3>

            <div className="calc-fuel-options">
              {Object.entries(FUELS).map(([key, f]) => (
                <button
                  key={key}
                  type="button"
                  className={`calc-fuel ${fuel === key ? "active" : ""}`}
                  onClick={() => setFuel(key)}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <label className="calc-field">
              <span>{current.label} used per month (tonnes)</span>
              <input
                type="number"
                min="0"
                step="0.5"
                inputMode="decimal"
                value={tonnes}
                onChange={(e) => setTonnes(e.target.value)}
              />
            </label>

            <div className="calc-row">

              <label className="calc-field">
                <span>{current.label} price (₹/kg) <em>optional</em></span>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  inputMode="decimal"
                  placeholder={`e.g. ${current.examplePrice}`}
                  value={fuelPrice}
                  onChange={(e) => setFuelPrice(e.target.value)}
                />
              </label>

              <label className="calc-field">
                <span>Pellet price (₹/kg) <em>optional</em></span>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  inputMode="decimal"
                  placeholder="from your quote"
                  value={pelletPrice}
                  onChange={(e) => setPelletPrice(e.target.value)}
                />
              </label>

            </div>

            <p className="calc-price-hint">
              Pellet prices differ for wholesale and bulk orders. Ask us
              for a quote for your quantity.
            </p>

          </div>

          {/* RESULTS */}

          <div className="calculator-card calculator-results">

            <div className="calc-result">
              <Package size={26} />
              <div>
                <strong>{formatNumber(pelletTonnes)} tonnes</strong>
                <span>of pellets per month give the same heat</span>
              </div>
            </div>

            <div className="calc-result">
              <Leaf size={26} />
              <div>
                {current.co2PerKg > 0 ? (
                  <>
                    <strong>{formatNumber(co2Tonnes)} tonnes CO₂</strong>
                    <span>
                      of fossil emissions avoided per month
                      ({formatNumber(co2Tonnes * 12, 0)} tonnes a year)
                    </span>
                  </>
                ) : (
                  <>
                    <strong>No trees cut</strong>
                    <span>
                      pellets are made from fallen pine needles, so no
                      firewood is taken from the forest
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="calc-result">
              <IndianRupee size={26} />
              <div>
                {hasPrices ? (
                  monthlySaving >= 0 ? (
                    <>
                      <strong>₹{formatNumber(monthlySaving, 0)} saved</strong>
                      <span>
                        per month (₹{formatNumber(monthlySaving * 12, 0)} a year)
                      </span>
                    </>
                  ) : (
                    <>
                      <strong>₹{formatNumber(-monthlySaving, 0)} more</strong>
                      <span>
                        per month, in exchange for cleaner, low-ash fuel
                      </span>
                    </>
                  )
                ) : (
                  <>
                    <strong>Cost comparison</strong>
                    <span>
                      add both prices above; pellet prices depend on
                      order size (wholesale or bulk)
                    </span>
                  </>
                )}
              </div>
            </div>

            <a className="calc-quote-btn" href="#contact">
              Get a Pellet Quote
            </a>

            <p className="calc-note">
              Estimates based on typical calorific values ({current.label.toLowerCase()} ≈{" "}
              {formatNumber(current.gcv, 0)} kcal/kg, our pellets{" "}
              {formatNumber(PELLET_GCV, 0)} kcal/kg). Actual results depend
              on your boiler and fuel quality.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default SavingsCalculator;
