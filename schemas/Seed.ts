import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';
import { isSignedIn, permissions, rules } from '../access';

export const Seed = list({
    access: {
        create: isSignedIn,
        read: rules.canManageSeed,
        update: rules.canManageSeed,
        // only people with the permission can delete themselves!
        // You can't delete yourself
        delete: permissions.canManageSeed,
    },
    fields: {
        seed_total_acre: text({ isRequired: true }),
        seed_source_type: text({ isRequired: true }),
        landHolding: relationship({ ref: 'LandHolding.seed' }),
        crop: relationship({
            ref: 'Crop.seed',
        }),
        fertPest: relationship({
            ref: 'FertPest.seed',
        }),
    },
});
