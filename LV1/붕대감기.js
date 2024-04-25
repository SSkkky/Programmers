const solution = (bandage, health, attacks) => {
    const playTime = bandage[0]; // 시전 시간
    const contNum = bandage[1]; // 초당 회복량
    const plusHp = bandage[2]; // 추가 회복량
    let nowHealth = health; // 현재 체력, 최대 체력
    let successNum = -1; // 연속 성공 횟수
    let isHeal = false; // 공격당하지 않았을 때 회복
    let isDead = false;

    const totalTime = attacks[attacks.length - 1][0];

    for (let t = 0; t < totalTime + 1; t++) {
        isHeal = true;
        isDead = false;

        if (successNum === playTime) {
            successNum = 0;
            nowHealth += plusHp;
        }

        if (nowHealth >= health) nowHealth = health;

        ++successNum;

        attacks.forEach((item) => {
            if (t === item[0]) {
                isHeal = false;
                nowHealth -= item[1]
                successNum = 0;
                if (nowHealth < 1) {
                    isDead = true;
                };
            }
        })
        if (isHeal) nowHealth += contNum;
        if (isDead) return -1;
    }

    return isDead ? -1 : nowHealth;
}

console.log(solution([10, 10, 100], 10, [[1, 15], [3, 1]]))