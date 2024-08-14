export function calculateSalary(
  jobTitle: string,
  yearsOfExperience: number
): number {
  const baseSalaryRange = {
    min: 1500000, // 1,500,000 MNT
    max: 3000000, // 3,000,000 MNT
  };

  let multiplier = 1;
  if (yearsOfExperience < 2) multiplier = 0.8;
  else if (yearsOfExperience < 5) multiplier = 1;
  else if (yearsOfExperience < 10) multiplier = 1.2;
  else multiplier = 1.4;

  // Adjusting to reduce randomness
  const baseSalary =
    baseSalaryRange.min +
    (baseSalaryRange.max - baseSalaryRange.min) *
      (yearsOfExperience / 10 || 0.5);
  const calculatedSalary = Math.round(baseSalary * multiplier);

  // salary stays within a realistic range
  return Math.min(
    Math.max(calculatedSalary, baseSalaryRange.min),
    baseSalaryRange.max * 1.5
  );
}
