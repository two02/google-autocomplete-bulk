const Gauto = require('../Gauto');

async function main() {
  const results = await Gauto('Paris',10);
  console.log(results);
}

main();