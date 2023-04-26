const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, { profileId }) => {
            return User.findOne({ _id: profileId })
        }
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) throw new AuthenticationError('No profile with this email found!');

            const correctPw = await user.isCorrectPassword(password)

            if (!correctPw) throw new AuthenticationError('Incorrect password!');

            const token = signToken(user);
            return { token, user }
        },
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password })
            const token = signToken(user)

            return { token, profile };
        },
        saveBook: async (parent, { userId, book }) => {
            const user = await User.findOneAndUpdate(
                { _id: userId },
                {
                    $addToSet: { savedBooks: book }
                },
                {
                    new: true,
                    runValidators: true
                }
            )
            return user
        },
        removeBook: async (parent, { userId, book }) => {
            const user = User.findOneAndUpdate(
                { _id: userId },
                { $pull: { books: book } },
                { new: true }
            )
        }
    }
}

module.exports = resolvers;