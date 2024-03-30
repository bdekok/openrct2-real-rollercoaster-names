import { RideType } from '../types/RideType';
import alpineCoasterNames from './names/alpine';
import airPoweredVerticalCoasterNames from './names/airPowered';
import bobsledCoasterNames from './names/bobsled';
import compactInvertedCoasterNames from './names/compactInverted';
import corkscrewCoasterNames from './names/corkscrew';
import flyingCoasterNames from './names/flying';
import gigaCoasterNames from './names/giga';
import heartlineTwisterCoasterNames from './names/heartlineTwister';
import invertedRollercoasterNames from './names/inverted';
import invertedHairpinCoasterNames from './names/invertedHairpin';
import invertedImpulseCoasterNames from './names/invertedImpulse';
import juniorCoasterNames from './names/junior';
import layDownCoasterNames from './names/layDown';
import loopingCoasterNames from './names/looping';
import mineTrainCoasterNames from './names/mineTrain';
import fourthDimensionCoasterNames from './names/fourthDimension';
import reverseFreeFallCoasterNames from './names/reverseFreeFall';
import sideFrictionCoasterNames from './names/sideFriction';
import standupRollercoasterNames from './names/standup';
import steelWildMouseCoasterNames from './names/steelWildMouse';
import steepleChaseCoasterNames from './names/steepleChase';
import suspendedSwiningCoasterNames from './names/suspendedSwinging';
import twisterCoasterNames from './names/twister';
import verticalDropCoasterNames from './names/verticalDrop';
import virginiaReelCoasterNames from './names/virginiaReel';
import waterCoasterNames from './names/water';
import woodenCoasterNames from './names/wooden';
import woodenWildMouseCoasterNames from './names/woodenWildMouse';
import poweredMineCoasterNames from './names/poweredMineRide';
import hyperTwisterCoasterNames from './names/hyperTwister';
import hyperCoasterNames from './names/hyper';
import miniSuspendedCoasterNames from './names/miniSuspended';

type RollercoasterNames = { [key in RideType]?: Readonly<string[]> };

export const rollercoasterNames: RollercoasterNames = {
  [RideType.RIDE_TYPE_AIR_POWERED_VERTICAL_COASTER]:
    airPoweredVerticalCoasterNames,
  [RideType.RIDE_TYPE_ALPINE_COASTER]: alpineCoasterNames,
  [RideType.RIDE_TYPE_BOBSLEIGH_COASTER]: bobsledCoasterNames,
  [RideType.RIDE_TYPE_MINI_SUSPENDED_COASTER]: miniSuspendedCoasterNames,
  //   [RideType.RIDE_TYPE_CLASSIC_MINI_ROLLER_COASTER]: [],
  //   [RideType.RIDE_TYPE_CLASSIC_WOODEN_ROLLER_COASTER]: [],

  [RideType.RIDE_TYPE_COMPACT_INVERTED_COASTER]: compactInvertedCoasterNames,
  [RideType.RIDE_TYPE_CORKSCREW_ROLLER_COASTER]: corkscrewCoasterNames,
  [RideType.RIDE_TYPE_FLYING_ROLLER_COASTER]: flyingCoasterNames,
  [RideType.RIDE_TYPE_FLYING_ROLLER_COASTER_ALT]: flyingCoasterNames,
  [RideType.RIDE_TYPE_GIGA_COASTER]: gigaCoasterNames,
  [RideType.RIDE_TYPE_HYPERCOASTER]: hyperCoasterNames,
  [RideType.RIDE_TYPE_HYPER_TWISTER]: hyperTwisterCoasterNames,
  [RideType.RIDE_TYPE_HEARTLINE_TWISTER_COASTER]: heartlineTwisterCoasterNames,
  [RideType.RIDE_TYPE_INVERTED_ROLLER_COASTER]: invertedRollercoasterNames,
  [RideType.RIDE_TYPE_INVERTED_HAIRPIN_COASTER]: invertedHairpinCoasterNames,
  [RideType.RIDE_TYPE_INVERTED_IMPULSE_COASTER]: invertedImpulseCoasterNames,
  [RideType.RIDE_TYPE_JUNIOR_ROLLER_COASTER]: juniorCoasterNames,
  [RideType.RIDE_TYPE_LAY_DOWN_ROLLER_COASTER]: layDownCoasterNames,
  [RideType.RIDE_TYPE_LAY_DOWN_ROLLER_COASTER_ALT]: layDownCoasterNames,
  [RideType.RIDE_TYPE_LOOPING_ROLLER_COASTER]: loopingCoasterNames,
  [RideType.RIDE_TYPE_MINE_TRAIN_COASTER]: mineTrainCoasterNames,
  [RideType.RIDE_TYPE_MULTI_DIMENSION_ROLLER_COASTER]:
    fourthDimensionCoasterNames,
  [RideType.RIDE_TYPE_MULTI_DIMENSION_ROLLER_COASTER_ALT]:
    fourthDimensionCoasterNames,
  [RideType.RIDE_TYPE_REVERSE_FREEFALL_COASTER]: reverseFreeFallCoasterNames,
  [RideType.RIDE_TYPE_SIDE_FRICTION_ROLLER_COASTER]: sideFrictionCoasterNames,
  [RideType.RIDE_TYPE_STAND_UP_ROLLER_COASTER]: standupRollercoasterNames,
  [RideType.RIDE_TYPE_STEEL_WILD_MOUSE]: steelWildMouseCoasterNames,
  [RideType.RIDE_TYPE_MINE_RIDE]: poweredMineCoasterNames,
  [RideType.RIDE_TYPE_STEEPLECHASE]: steepleChaseCoasterNames,
  [RideType.RIDE_TYPE_SUSPENDED_SWINGING_COASTER]: suspendedSwiningCoasterNames,
  [RideType.RIDE_TYPE_TWISTER_ROLLER_COASTER]: twisterCoasterNames,
  [RideType.RIDE_TYPE_VERTICAL_DROP_ROLLER_COASTER]: verticalDropCoasterNames,
  [RideType.RIDE_TYPE_VIRGINIA_REEL]: virginiaReelCoasterNames,
  [RideType.RIDE_TYPE_WATER_COASTER]: waterCoasterNames,
  [RideType.RIDE_TYPE_WOODEN_ROLLER_COASTER]: woodenCoasterNames,
  [RideType.RIDE_TYPE_WOODEN_WILD_MOUSE]: woodenWildMouseCoasterNames,
};
