import { StoreApi } from "zustand";

export type UserAttributes = Record<string, any>;
export type Flags = Record<string, any>;

export interface AttrMap {
  key: string;
  value: any;
}

export interface Segment {
  id: string;
  attr: AttrMap[];
  features: (string | Feature)[];
}

export interface Feature {
  id: string;
  description?: string;
  value?: any;
}

export interface FeaturesOptions {
  segments: Segment[];
  attr?: UserAttributes;
}

export interface FeaturesStoreValue {
  isReady: boolean;
  attr?: UserAttributes;
  segments: Segment[];
  flags: Flags;
  identify: (attr: UserAttributes) => void;
  hasFeatures: (ids: string[], value: any) => Record<string, any>;
}

export type FeaturesStore = StoreApi<FeaturesStoreValue> & {
  init: (options: FeaturesOptions) => void;
};
