import { checkbox } from '@keystone-next/fields';

export const permissionFields = {
  canManageProducts: checkbox({
    defaultValue: false,
    label: 'User can Update and delete any product',
  }),
  canSeeOtherUsers: checkbox({
    defaultValue: false,
    label: 'User can query other users',
  }),
  canManageUsers: checkbox({
    defaultValue: false,
    label: 'User can Edit other users',
  }),
  canManageRoles: checkbox({
    defaultValue: true,
    label: 'User can CRUD roles',
  }),
  canManageCart: checkbox({
    defaultValue: false,
    label: 'User can see and manage cart and cart items',
  }),
  canManageOrders: checkbox({
    defaultValue: false,
    label: 'User can see and manage orders',
  }),
  canManageCrops: checkbox({
    defaultValue: false,
    label: 'User can see and manage crops',
  }),
  canManageLandHolding: checkbox({
    defaultValue: false,
    label: 'User can see and manage lang holding',
  }),
  canManageUserImage: checkbox({
    defaultValue: false,
    label: 'User can see and manage image',
  }),
  canManageSeed: checkbox({
    defaultValue: false,
    label: 'User can see and manage seed',
  }),
  canManageFertPest: checkbox({
    defaultValue: false,
    label: 'User can see and manage Fertilizer and Pest',
  }),
  canManageProducePlan: checkbox({
    defaultValue: false,
    label: 'User can see and manage produce plan',
  }),
  canManageMarketing: checkbox({
    defaultValue: false,
    label: 'User can see and manage marketing',
  }),
};

export type Permission = keyof typeof permissionFields;

export const permissionsList: Permission[] = Object.keys(
  permissionFields
) as Permission[];
