import GetChallenges from '../../gold-star/cadence/scripts/GetChallenges.cdc';
import GetProfile from '../../gold-star/cadence/scripts/GetProfile.cdc';
import CreateProfile from '../../gold-star/cadence/transactions/GoldStar/CreateProfile.cdc';
import UpdateProfile from '../../gold-star/cadence/transactions/GoldStar/UpdateProfile.cdc';

import * as fcl from '@onflow/fcl';
import {
  ChallengeResponse,
  Profile,
  ProfileResponse,
  ProfileUpdate,
} from '../types/gold-star';

/**
 * Get the list of challenges
 * @returns The list of challenges
 */
export const getChallenges = async () => {
  const resp = (await fcl.query({
    cadence: GetChallenges,
  })) as ChallengeResponse[];

  return resp.map((c) => ({
    name: c.name,
    description: c.description,
  }));
};

/**
 * Get the profile for the given address
 * @param address
 * @returns The profile for the given address
 */
export const getProfile = async (address: string): Promise<Profile> => {
  const resp = (await fcl.query({
    cadence: GetProfile,
    args: (arg, t) => [arg(address, t.Address)],
  })) as ProfileResponse;

  return {
    handle: resp.handle,
    socials: resp.socials,
    completedChallenges: resp.completedChallenges.map((c) => ({
      name: c.name,
      description: c.description,
    })),
  };
};

/**
 * Create a new profile for the user
 * @param profile
 * @returns The transaction ID
 */
export const createProfile = async (profile: ProfileUpdate) => {
  return await fcl.mutate({
    cadence: CreateProfile,
    args: (arg, t) => [
      arg(profile.handle, t.String),
      arg(profile.referralSource, t.Optional(t.String)),
      arg(profile.socials, t.Array(t.String)),
      arg(
        profile.deployedContracts,
        t.Dictionary(t.Address, t.Dictionary(t.Address, t.Array(t.String))),
      ),
    ],
  });
};

/**
 * Update the profile for the user with the given settings.  This will overwrite the existing profile.
 * @param profile The new profile settings
 * @returns The transaction ID
 */
export const setProfile = async (profile: ProfileUpdate) => {
  return await fcl.mutate({
    cadence: UpdateProfile,
    args: (arg, t) => [
      arg(profile.handle, t.String),
      arg(profile.referralSource, t.Optional(t.String)),
      arg(profile.socials, t.Array(t.String)),
      arg(
        profile.deployedContracts,
        t.Dictionary(t.Address, t.Dictionary(t.Address, t.Array(t.String))),
      ),
    ],
  });
};
