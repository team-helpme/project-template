const express = require('express');

const router = express.Router();

const Profile = require('../../models/profile.model');

const User = require('../../models/User');

const validateInput = require('../../validation/profile');

// Create a new Profile
router.post('/', async (req, res) => {
    const {
        bio, city, country, firstName, id, lastName,
    } = req.body;

    // Validate request
    const { errors, isValid } = validateInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.json({
            message: errors,
            status: 'error',
        });
    }

    // create new profile
    const profile = new Profile({
        bio,
        city,
        country,
        firstName,
        lastName,
    });
    // Save Profile in the database
    try {
        const user = await User.findById(id);
        user.profile = profile;
        user.save();
        return res.json({
            data: user,
            status: 'success',
        });
    } catch (err) {
        return err;
    }
});

// Retrieve all profiles
router.get('/', async (req, res) => {
    try {
        const profiles = await User.find();
        if (!profiles) {
            return res.json({
                message: 'No Profile found',
                status: 'error',
            });
        }
        return res.json({
            data: profiles,
            status: 'success',
        });
    } catch (err) {
        return err;
    }
});

// Retrieve a single Profile with profileId
router.get('/:profileId', async (req, res) => {
    const { profileId } = req.params;
    try {
        const profile = await User.findById(profileId);
        if (!profile) {
            return res.json({
                message: `Profile not found with id ${profileId}`,
                status: 'error',
            });
        }
        return res.json(profile);
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.json({
                message: `Profile not found with id ${profileId}`,
                status: 'error',
            });
        }
    }
    return null;
});

// Update a Profile with profileId
router.put('/:profileId', async (req, res) => {
    const {
        bio, city, country, firstName, lastName, profileId,
    } = req.body;

    // Validate request
    const { errors, isValid } = validateInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.json({
            message: errors,
            status: 'error',
        });
    }
    const profile = new Profile({
        bio,
        city,
        country,
        firstName,
        lastName,
    });
    try {
        const updatedProfile = await User.findByIdAndUpdate(profileId, profile, { new: true });
        if (!updatedProfile) {
            return res.json({
                message: `Profile not found with id ${profileId}`,
                status: 'error',
            });
        }
        return res.json(updatedProfile);
    } catch (err) {
        return res.json({
            message: `Error updating profile with id ${profileId}`,
            status: 'error',
        });
    }
});

// Delete a Profile with profileId
router.delete('/:profileId', async (req, res) => {
    const { profileId } = req.params;
    try {
        const profile = await User.findByIdAndDelete(profileId);
        if (!profile) {
            return res.json({
                message: `Profile not found with id ${profileId}`,
                status: 'error',
            });
        }
        return res.json({
            data: null,
            status: 'success',
        });
    } catch (err) {
        return err;
    }
});

module.exports = router;
