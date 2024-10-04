function dividePlayers(skill: number[]): number {
	skill.sort((a, b) => a - b);

	const totalTeams = skill.length / 2;
	const targetSkillSum = skill[0] + skill[skill.length - 1];
	let totalChemistry = 0;

	for (let x = 0; x < totalTeams; x++) {
		const pairedSkillSum = skill[x] + skill[skill.length - 1 - x];

		if (pairedSkillSum !== targetSkillSum) {
			return -1;
		}

		totalChemistry += skill[x] * skill[skill.length - 1 - x];
	}

	return totalChemistry;
}
