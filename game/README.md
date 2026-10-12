# Pirul to Pellet

A browser game about Himalayan Green Fuel's work, set in a valley modelled on the plant at Someshwar. You rake fallen pine needles (pirul) in a chir pine forest and empty them at a baling press. A truck takes the bundles to the raw material shed. From there you carry them to the pellet plant, which turns each bundle into pellets. Pirul left on the forest floor catches fire, and you have to beat the fires out before they spread.

It is a single self-contained file, `index.html`, with no build step and no dependencies. Open it in any browser, or serve the folder:

```bash
npx serve game
```

It is kept separate from the website and is not deployed with it.

## Controls

- Tap or click where you want to walk, or use the arrow keys or WASD.
- **T** sends the truck, **U** opens upgrades, **Esc** closes them.

## Numbers used

- 20 kg of loose needles makes one bundle.
- One bundle makes 17 kg of pellets, sold at ₹9 a kg.
- Needles fall faster as the season goes on. Fire risk is the needles on the ground against 300 kg. Above 35% risk, dry piles start catching fire, more often the higher it goes.
- Fires burn through needles, spread to nearby piles and trees, and char the trees they reach. Stand in the flames to beat them out with green branches; hired collectors run to help.
- The season ends when a third of the forest has burned.
