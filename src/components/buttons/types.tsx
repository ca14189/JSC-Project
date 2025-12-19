// types.ts
export const ButtonVariant = ['primary', 'outline', 'ghost', 'light', 'dark'] as const;
export const ButtonSize = ['sm', 'base'] as const;

export type ButtonVariant = (typeof ButtonVariant)[number];
export type ButtonSize = (typeof ButtonSize)[number];
export const IconButtonVariant = ['primary','outline','ghost','light','dark',] as const;
export const TextButtonVariant = ['primary', 'basic'] as const;
export const ButtonLinkVariant = ['primary','outline','ghost','light','dark',] as const;
export const ButtonLinkSize = ['sm', 'base'] as const;
export const IconLinkVariant = ['primary','outline','ghost','light','dark',] as const;
export const PrimaryLinkVariant = ['primary', 'basic'] as const;
