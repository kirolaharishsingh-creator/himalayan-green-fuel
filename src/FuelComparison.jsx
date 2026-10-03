import { Check, X } from "lucide-react";

// Our pellets: NABL lab report QTRC/9120260527/01 (27 May 2026).
// Coal: typical Indian domestic thermal coal (non-coking).
// Firewood: typical air-dried firewood.
const ROWS = [
  {
    label: "Calorific value (GCV)",
    pellets: "4,603 kcal/kg",
    coal: "3,500–4,000 kcal/kg",
    firewood: "3,000–4,000 kcal/kg",
  },
  {
    label: "Ash left behind",
    pellets: "3.1%",
    coal: "35–45%",
    firewood: "1–3%",
  },
  {
    label: "Moisture",
    pellets: "5.3%",
    coal: "Often high",
    firewood: "15–25%",
  },
  {
    label: "Made from",
    pellets: "Fallen pine needles",
    coal: "Mined fossil fuel",
    firewood: "Cut trees",
  },
  {
    label: "Renewable",
    pellets: true,
    coal: false,
    firewood: true,
  },
  {
    label: "No fossil CO₂ emissions",
    pellets: true,
    coal: false,
    firewood: true,
  },
  {
    label: "Reduces forest fire risk",
    pellets: true,
    coal: false,
    firewood: false,
  },
];

const Cell = ({ value }) => {
  if (typeof value === "boolean") {
    return (
      <span className={`cmp-icon ${value ? "yes" : "no"}`}>
        {value ? <Check size={18} /> : <X size={18} />}
        <span className="cmp-sr">{value ? "Yes" : "No"}</span>
      </span>
    );
  }
  return value;
};

function FuelComparison() {
  return (
    <section id="compare" className="compare-section">

      <div className="container">

        <div className="section-heading">

          <div className="section-tag">
            FUEL COMPARISON
          </div>

          <h2 className="section-title">
            How Our Pellets Compare
          </h2>

        </div>

        <div className="compare-table-wrap">

          <table className="compare-table">

            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col" className="cmp-ours">Our Pellets</th>
                <th scope="col">Indian Coal</th>
                <th scope="col">Firewood</th>
              </tr>
            </thead>

            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td className="cmp-ours">
                    <Cell value={row.pellets} />
                  </td>
                  <td>
                    <Cell value={row.coal} />
                  </td>
                  <td>
                    <Cell value={row.firewood} />
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

        <p className="compare-note">
          Our pellets: results from a NABL-accredited laboratory (May 2026).
          Coal and firewood: typical published values for Indian thermal coal
          and air-dried firewood; actual fuels vary.
        </p>

      </div>

    </section>
  );
}

export default FuelComparison;
