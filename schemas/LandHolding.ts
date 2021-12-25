import { list } from '@keystone-next/keystone/schema';
import { integer, text, relationship } from '@keystone-next/fields';
import { isSignedIn, permissions, rules } from '../access';

export const LandHolding = list({
    access: {
        create: isSignedIn,
        read: rules.canManageLandHolding,
        update: rules.canManageLandHolding,
        // only people with the permission can delete themselves!
        // You can't delete yourself
        delete: permissions.canManageLandHolding,
    },
    fields: {
        land_acre_number: integer({ isRequired: true }),
        land_acre_cultivable: integer({ isRequired: true }),
        land_acre_irrigation: integer(),
        land_irrigation_type: text({ isRequired: true }),
        user: relationship({ ref: 'User.landHolding' }),
        crop: relationship({
            ref: 'Crop.landHolding',
            ui: {
                createView: { fieldMode: 'hidden' },
                itemView: { fieldMode: 'read' },
            },
        }),
        seed: relationship({
            ref: 'Seed.landHolding',
        }),
        fertPest: relationship({
            ref: 'FertPest.landHolding',
        }),
        producePlan: relationship({
            ref: 'ProducePlan.landHolding',
        }),
        marketing: relationship({
            ref: 'Marketing.landHolding',
        }),
    },
});
