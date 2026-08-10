export const spring = {
  default:  { type: "spring" as const, bounce: 0,    duration: 0.4 },
  snappy:   { type: "spring" as const, bounce: 0,    duration: 0.28 },
  momentum: { type: "spring" as const, bounce: 0.18, duration: 0.4 },
} as const;

export const ease = {
  standard: [0.22, 0.61, 0.36, 1] as [number, number, number, number],
  out:      [0.23, 1, 0.32, 1]    as [number, number, number, number],
  inOut:    [0.77, 0, 0.175, 1]   as [number, number, number, number],
} as const;
