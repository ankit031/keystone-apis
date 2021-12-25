import { list } from '@keystone-next/keystone/schema';
import {
  integer,
  text,
  password,
  select,
  relationship,
} from '@keystone-next/fields';
import { isSignedIn, permissions, rules } from '../access';

export const User = list({
  access: {
    create: isSignedIn,
    read: rules.canManageUsers,
    update: rules.canManageUsers,
    // only people with the permission can delete themselves!
    // You can't delete yourself
    delete: permissions.canManageUsers,
  },
  ui: {
    // hide the backend UI from regular users
    hideCreate: (args) => !permissions.canManageUsers(args),
    hideDelete: (args) => !permissions.canManageUsers(args),
  },
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    age: integer({ isRequired: true }),
    gender: select({
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
      ],
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    state: text({ isRequired: true }),
    district: text({ isRequired: true }),
    block: text({ isRequired: true }),
    panchayat: text({ isRequired: true }),
    village: text({ isRequired: true }),
    phone: text({ isRequired: true }),
    phone_verified: select({
      options: [
        { label: 'True', value: 'true' },
        { label: 'False', value: 'false' },
      ],
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    password: password(),
    photo: relationship({
      ref: 'UserImage.user',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    landHolding: relationship({
      ref: 'LandHolding.user',
      ui: {
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
      },
    }),
    crop: relationship({
      ref: 'Crop.user',
      ui: {
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
      },
    }),
    fertPest: relationship({
      ref: 'FertPest.user',
    }),
    producePlan: relationship({
      ref: 'ProducePlan.user',
    }),
    marketing: relationship({
      ref: 'Marketing.user',
    }),
    role: relationship({
      ref: 'Role.assignedTo',
      access: {
        create: permissions.canManageUsers,
        update: permissions.canManageUsers,
      },
    }),
  },
});
