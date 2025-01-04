export interface ProfileUpdate {
  handle?: string;
  referralSource?: string;
  socials?: Map<string, string>;
  deployedContracts?: DeployedContract[];
}

export interface DeployedContract {
  name: string;
  address: string;
}

export interface Profile {
  handle: string;
  socials: string[];
  completedChallenges: Challenge[];
}

export interface ProfileResponse {
  handle: string;
  socials: string[];
  completedChallenges: ChallengeResponse[];
}

export interface ChallengeResponse {
  id: string;
  name: string;
  description: string;
}

export interface Challenge {
  name: string;
  description: string;
}
