import { DateResolver, DateTimeResolver, UUIDResolver } from 'graphql-scalars'
import { asNexusMethod } from 'nexus'

export const Date = asNexusMethod(DateResolver, 'date')
export const DateTime = asNexusMethod(DateTimeResolver, 'dateTime')
export const Uuid = asNexusMethod(UUIDResolver, 'uuid')
