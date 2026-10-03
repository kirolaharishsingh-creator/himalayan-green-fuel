import { useState } from "react";
import { Calculator, Leaf, Package, Trees } from "lucide-react";

// Gross calorific value of our pellets (from the product spec sheet).
const PELLET_GCV = 4603; // kcal/kg

// Typical values for the fuels industrial boilers in the region switch from.
// CO2 is fossil CO2 only; firewood is biomass, so no fossil CO2 is counted.
// Emission factors are IPCC 2006 defaults:
// - coal: sub-bituminous 96.1 tCO2/TJ x ~15.9 MJ/kg (net) for ~4,000 kcal/kg
//   Indian coal = ~1.53 kg CO2/kg
// - furnace oil (residual fuel oil): 77.4 tCO2/TJ x 40.4 MJ/kg = ~3.13 kg CO2/kg
const FUELS = {
  coal: { label: "Coal", gcv: 4000, co2PerKg: 1.53 },
  firewood: { label: "Firewood", gcv: 3500, co2PerKg: 0 },
  furnaceOil: { label: "Furnace oil", gcv: 10000, co2PerKg: 3.13 },
};

// A mature tree absorbs roughly 21 kg of CO2 a year (commonly used estimate).
const CO2_PER_TREE_PER_YEAR = 21; // kg

const formatNumber = (n, digits = 1) =>
  n.toLocaleString("en-IN", { maximumFractionDigits: digits });

// On phones and tablets the contact cards (address, phone, email) come
// before the inquiry form, so jump straight to the form. On desktop the
// form sits beside the cards, so the whole Contact section is shown.
const goToInquiryForm = (e) => {
  if (!window.matchMedia("(max-width: 992px)").matches) return;
  const form = document.getElementById("inquiry-form");
  if (!form) return;
  e.preventDefault();
  // show it in its final place first, so the scroll doesn't aim at the
  // still-animating (shifted) position of the scroll-in animation
  form.classList.remove("reveal", "revealed");
  form.scrollIntoView({ behavior: "smooth", block: "start" });
};

function SavingsCalculator() {
  const [fuel, setFuel] = useState("coal");
  const [tonnes, setTonnes] = useState("10");

  const current = FUELS[fuel];
  const qty = Math.max(parseFloat(tonnes) || 0, 0);

  // Pellets needed to deliver the same heat.
  const pelletTonnes = (qty * current.gcv) / PELLET_GCV;
  const co2Month = qty * current.co2PerKg; // tonnes
  const co2Year = co2Month * 12;
  const treesEquivalent = (co2Year * 1000) / CO2_PER_TREE_PER_YEAR;

  return (
    <section id="calculator" className="calculator-section">

      <div className="container">

        <div className="section-heading">

          <div className="section-tag">
            CO₂ SAVINGS CALCULATOR
          </div>

          <h2 className="section-title">
            How Much CO₂ Would You Save?
          </h2>

          <p className="calculator-subtitle">
            Enter your current monthly fuel use to see the emissions you
            would avoid by switching to pine needle pellets.
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

            <div className="calc-result">
              <Package size={26} />
              <div>
                <strong>{formatNumber(pelletTonnes)} tonnes of pellets</strong>
                <span>per month give the same heat</span>
              </div>
            </div>

          </div>

          {/* RESULTS */}

          <div className="calculator-card calculator-results">

            {current.co2PerKg > 0 ? (
              <>
                <div className="calc-result calc-result-main">
                  <Leaf size={30} />
                  <div>
                    <strong>{formatNumber(co2Year, 0)} tonnes CO₂</strong>
                    <span>
                      of fossil emissions avoided every year
                      ({formatNumber(co2Month)} tonnes a month)
                    </span>
                  </div>
                </div>

                <div className="calc-result">
                  <Trees size={26} />
                  <div>
                    <strong>
                      ≈ {formatNumber(treesEquivalent, 0)} trees
                    </strong>
                    <span>
                      would take a year to absorb that much CO₂
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="calc-result calc-result-main">
                  <Trees size={30} />
                  <div>
                    <strong>
                      {formatNumber(qty * 12, 0)} tonnes of firewood
                    </strong>
                    <span>
                      a year no longer needed: pellets are made from fallen
                      pine needles instead of wood
                    </span>
                  </div>
                </div>

                <div className="calc-result">
                  <Leaf size={26} />
                  <div>
                    <strong>Lower forest fire risk</strong>
                    <span>
                      collecting dry pine needles removes fuel from the
                      forest floor
                    </span>
                  </div>
                </div>
              </>
            )}

            <a
              className="calc-quote-btn"
              href="#contact"
              onClick={goToInquiryForm}
            >
              Get a Pellet Quote
            </a>

            <p className="calc-note">
              Estimates based on IPCC emission factors and typical values ({current.label.toLowerCase()} ≈{" "}
              {formatNumber(current.gcv, 0)} kcal/kg, our pellets{" "}
              {formatNumber(PELLET_GCV, 0)} kcal/kg; a tree absorbs ≈{" "}
              {CO2_PER_TREE_PER_YEAR} kg CO₂ a year). Actual results depend
              on your boiler and fuel quality.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default SavingsCalculator;
