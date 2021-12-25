import { list } from '@keystone-next/keystone/schema';
import { integer, text, relationship } from '@keystone-next/fields';
import { isSignedIn, permissions, rules } from '../access';

export const Crop = list({
    access: {
        create: isSignedIn,
        read: rules.canManageCrops,
        update: rules.canManageCrops,
        // only people with the permission can delete themselves!
        // You can't delete yourself
        delete: permissions.canManageCrops,
    },
    fields: {
        season_type: text({ isRequired: true }),
        crop_name: text({ isRequired: true }),
        land_acre_used: integer({ isRequired: true }),
        average_yeild_per_acre: text({ isRequired: true }),
        new_crop_planned: text({ isRequired: true }),
        user: relationship({ ref: 'User.crop' }),
        seed: relationship({
            ref: 'Seed.crop',
            ui: {
                createView: { fieldMode: 'hidden' },
                itemView: { fieldMode: 'read' },
            },
        }),
        landHolding: relationship({ ref: 'LandHolding.crop' }),
        fertPest: relationship({
            ref: 'FertPest.crop',
        }),
        producePlan: relationship({
            ref: 'ProducePlan.crop',
        }),
        marketing: relationship({
            ref: 'Marketing.crop',
        }),
    },
});
