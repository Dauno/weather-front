import georgia from '../assets/img/georgia.png';
import londres from '../assets/img/londres.png';
import santiago from '../assets/img/santiago.png';
import sydney from '../assets/img/sydney.png';
import auckland from '../assets/img/auckland.png';
import zurich from '../assets/img/zurich.png';

function getFlag(city) {
  const flags = {
    Zurich: zurich,
    Londres: londres,
    Sydney: sydney,
    Georgia: georgia,
    Santiago: santiago,
    Auckland: auckland,
  };
  return flags[city];
}

export {
  getFlag,
};
