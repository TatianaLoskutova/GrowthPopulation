function nbYear(p0, percent, aug, p) {
    let res = 0

    do {
        p0 = Math.floor(p0 + p0 * (percent/100) + aug)
        res ++
    } while (p0 < p)

    return res
}