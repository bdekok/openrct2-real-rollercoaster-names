import { WindowClass } from './types/WindowClass';

import { rollercoasterNames } from './constants/rollercoasterNames';
import { RideType } from './types/RideType';

export const getRandomExistingRollercoasterName = (
  type: RideType,
  exclude: string[]
): string => {
  const rollercoasterTypeNames = rollercoasterNames[type] || [];
  const filteredNames = rollercoasterTypeNames.filter(
    (name) => !exclude.some((excludedName) => excludedName === name)
  );

  if (!filteredNames.length) {
    return '';
  }
  console.log('filteredNames:', JSON.stringify(filteredNames));
  const randomNameIndex = context.getRandom(0, filteredNames.length);
  return filteredNames[randomNameIndex] || '';
};

const hasPremadeTrackDesignWindowOpen = () => {
  for (let index = 0; index < ui.windows; index++) {
    const w = ui.getWindow(index);

    if (
      w.classification == WindowClass.TrackDesignList ||
      w.classification == WindowClass.TrackDesignPlace
    ) {
      return true;
    }
  }
  return false;
};

const setRideName = (ride: number, name: string) => {
  context.executeAction(
    'ridesetname',
    { ride, name },
    ({ error, errorMessage, errorTitle }) => {
      if (error) {
        console.log(`${errorTitle}: ${errorMessage}`);
      } else {
        console.log(`Successfully named rideId ${ride} to ${name}`);
      }
    }
  );
};

const getAllExistingRideNames = () => {
  const rideNames = [];
  for (let i = 0; i <= map.numRides; i++) {
    const ride = map.getRide(i);
    if (ride) {
      rideNames.push(ride.name);
    }
  }
  return rideNames;
};

const setRandomRideName = (result: RideCreateActionResult) => {
  if (hasPremadeTrackDesignWindowOpen()) {
    return;
  }

  const { ride } = result;
  if (!ride) {
    return console.log('No ride found');
  }

  const { type } = map.getRide(ride);
  const existingNames = getAllExistingRideNames();
  const name = getRandomExistingRollercoasterName(type, existingNames);

  if (name) {
    setRideName(ride, name);
  } else {
    console.log(`No name found for type ${type}`);
  }
};

const main = (): void => {
  context.subscribe('action.execute', (event) => {
    switch (event.action) {
      case 'ridecreate': {
        setRandomRideName(event.result);
        break;
      }
      default:
        break;
    }
  });
};

export default main;
