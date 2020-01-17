const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		googleID: String
	},
	{ timestamps: { createdAt: 'created_at' }, _id: true }
);

mongoose.model('users', userSchema);
