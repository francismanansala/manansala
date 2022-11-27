import { IRules } from 'graphql-shield'
import { NexusGenFieldTypes, NexusGenObjectNames } from '@/generated/graphql/nexus'

export type PermissionsSchema = IRules & {
  [k in NexusGenObjectNames]?: Partial<Record<keyof NexusGenFieldTypes[k] | '*', IRules>>;
};