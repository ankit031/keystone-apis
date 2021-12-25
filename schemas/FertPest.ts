import { list } from '@keystone-next/keystone/schema';
import { integer, text, relationship } from '@keystone-next/fields';
import { isSignedIn, permissions, rules } from '../access';

export const FertPest = list({
    access: {
        create: isSignedIn,
        read: rules.canManageFertPest,
        update: rules.canManageFertPest,
        // only people with the permission can delete themselves!
        // You can't delete yourself
        delete: permissions.canManageFertPest,
    },
    fields: {
        dap_total_acre_crop: integer({ isRequired: true }),
        urea_total_acre_crop: integer({ isRequired: true }),
        other_total_acre_crop: integer(),
        pesticide_total_crop: integer({ isRequired: true }),
        herbicide_total_acre_crop: integer({ isRequired: true }),
        source_type: text(),
        user: relationship({
            ref: 'User.fertPest',
            defaultValue: ({ context }) => ({
                connect: { id: context.session.itemId },
            }),
        }),
        landHolding: relationship({ ref: 'LandHolding.fertPest' }),
        crop: relationship({
            ref: 'Crop.fertPest',
        }),
        seed: relationship({
            ref: 'Seed.fertPest',
        }),
    },
});
