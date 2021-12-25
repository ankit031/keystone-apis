import { list } from '@keystone-next/keystone/schema';
import { integer, text, relationship } from '@keystone-next/fields';
import { isSignedIn, permissions, rules } from '../access';

export const ProducePlan = list({
    access: {
        create: isSignedIn,
        read: rules.canManageProducePlan,
        update: rules.canManageProducePlan,
        // only people with the permission can delete themselves!
        // You can't delete yourself
        delete: permissions.canManageProducePlan,
    },
    fields: {
        percentage_consumption: integer({ isRequired: true }),
        percent_sale_raw: integer({ isRequired: true }),
        percentage_sale_primary_processed: integer(),
        percentage_seed: integer({ isRequired: true }),
        primary_processing_types: text(),
        primary_processing_products: text(),
        user: relationship({
            ref: 'User.producePlan',
            defaultValue: ({ context }) => ({
                connect: { id: context.session.itemId },
            }),
        }),
        landHolding: relationship({ ref: 'LandHolding.producePlan' }),
        crop: relationship({
            ref: 'Crop.producePlan',
        }),
        marketing: relationship({
            ref: 'Marketing.producePlan',
        }),
    },
});
