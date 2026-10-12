# Pirul to Pellet

A browser game about Himalayan Green Fuel's work, set in a valley modelled on the plant at Someshwar. You rake fallen pine needles (pirul) in a chir pine forest and empty them at a baling press. A truck takes the bundles to the raw material shed. From there you carry them to the pellet plant, which turns each bundle into pellets. If too much pirul piles up on the forest floor, a fire starts and the season ends.

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
- A forest fire starts when 300 kg of needles are lying on the ground. Needles fall faster as the season goes on.
