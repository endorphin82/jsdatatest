const graphql = require("graphql")
const { GraphQLSchema, GraphQLObjectType } = graphql

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    findByName: {
      type: new GraphQLList(UserType),
      args: { firstName: { type: GraphQLString } },
      resolve(parent, { firstName }) {
        console.info("findByName:", firstName)
        return Users.find({ firstName: { $regex: firstName, $options: "i" } })
      }
    },
    usersAll: {
      type: new GraphQLList(UserType),
      resolve: () => {
        console.info("usersAll")
        return Users.find({})
      }
    }
  }
})
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLString }
      },
      resolve(parent, { lastName, firstName }) {
        console.info("createUser:", firstName, firstName)
        const user = new Users({
          firstName,
          lastName
        })
        return user.save()
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
})
