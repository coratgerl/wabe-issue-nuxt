import {
	GraphQLBoolean,
	GraphQLFloat,
	GraphQLInputObjectType,
	GraphQLInt,
	GraphQLList,
	GraphQLScalarType,
	GraphQLString,
} from 'graphql'
import { WibeSchemaType } from '../schema/Schema'

export const AnyScalarType = new GraphQLScalarType({
	name: 'Any',
	description:
		'The Any scalar type is used in operations and types that involve any type of value.',
	parseValue: (value) => value,
	serialize: (value) => value,
})

export const DateScalarType = new GraphQLScalarType({
	name: 'Date',
	description: 'Date scalar type',
	parseValue(value: any) {
		return new Date(value)
	},
	serialize(value: any) {
		return value.getTime()
	},
})

export const ArrayWhereInput = new GraphQLInputObjectType({
	name: 'ArrayWhereInput',
	fields: {
		equalTo: { type: AnyScalarType },
		notEqualTo: { type: AnyScalarType },
		contains: { type: AnyScalarType },
		notContains: { type: AnyScalarType },
	},
})

export const DateWhereInput = new GraphQLInputObjectType({
	name: 'DateWhereInput',
	fields: {
		equalTo: { type: DateScalarType },
		notEqualTo: { type: DateScalarType },
		in: { type: new GraphQLList(DateScalarType) },
		notIn: { type: new GraphQLList(DateScalarType) },
		lessThan: { type: DateScalarType },
		lessThanOrEqualTo: { type: DateScalarType },
		greaterThan: { type: DateScalarType },
		greaterThanOrEqualTo: { type: DateScalarType },
	},
})

export const StringWhereInput = new GraphQLInputObjectType({
	name: 'StringWhereInput',
	fields: {
		equalTo: { type: GraphQLString },
		notEqualTo: { type: GraphQLString },
		in: { type: new GraphQLList(GraphQLString) },
		notIn: { type: new GraphQLList(GraphQLString) },
	},
})

export const IntWhereInput = new GraphQLInputObjectType({
	name: 'IntWhereInput',
	fields: {
		equalTo: { type: GraphQLInt },
		notEqualTo: { type: GraphQLInt },
		lessThan: { type: GraphQLInt },
		lessThanOrEqualTo: { type: GraphQLInt },
		greaterThan: { type: GraphQLInt },
		greaterThanOrEqualTo: { type: GraphQLInt },
		in: { type: new GraphQLList(GraphQLInt) },
		notIn: { type: new GraphQLList(GraphQLInt) },
	},
})

export const FloatWhereInput = new GraphQLInputObjectType({
	name: 'FloatWhereInput',
	fields: {
		equalTo: { type: GraphQLFloat },
		notEqualTo: { type: GraphQLFloat },
		lessThan: { type: GraphQLFloat },
		lessThanOrEqualTo: { type: GraphQLFloat },
		greaterThan: { type: GraphQLFloat },
		greaterThanOrEqualTo: { type: GraphQLFloat },
		in: { type: new GraphQLList(GraphQLFloat) },
		notIn: { type: new GraphQLList(GraphQLFloat) },
	},
})

export const BooleanWhereInput = new GraphQLInputObjectType({
	name: 'BooleanWhereInput',
	fields: {
		equalTo: { type: GraphQLBoolean },
		notEqualTo: { type: GraphQLBoolean },
	},
})

const templateWhereInput: Record<WibeSchemaType, GraphQLInputObjectType> = {
	[WibeSchemaType.String]: StringWhereInput,
	[WibeSchemaType.Int]: IntWhereInput,
	[WibeSchemaType.Float]: FloatWhereInput,
	[WibeSchemaType.Boolean]: BooleanWhereInput,
	[WibeSchemaType.Date]: DateWhereInput,
	[WibeSchemaType.Array]: ArrayWhereInput,
}

export const getWhereInputFromType = ({
	wibeType,
}: {
	wibeType: WibeSchemaType
}) => templateWhereInput[wibeType]
