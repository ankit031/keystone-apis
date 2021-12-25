import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';
import { isSignedIn, permissions, rules } from '../access';

export const Marketing = list({
    access: {
        create: isSignedIn,
        read: rules.canManageMarketing,
        update: rules.canManageMarketing,
        // only people with the permission can delete themselves!
        // You can't delete yourself
        delete: permissions.canManageMarketing,
    },
    fields: {
        mode_sale_type: text({ isRequired: true }),
        additional_amount_processed_product: text(),
        user: relationship({
            ref: 'User.marketing',
            defaultValue: ({ context }) => ({
                connect: { id: context.session.itemId },
            }),
        }),
        landHolding: relationship({ ref: 'LandHolding.marketing' }),
        crop: relationship({
            ref: 'Crop.marketing',
        }),
        producePlan: relationship({
            ref: 'ProducePlan.marketing',
        })
    },
});
