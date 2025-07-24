let age = 18
let graduation = "üniversite"

if (age >= 18 && (graduation === "üniversite" || graduation === "lise")) {
    console.log("Ehliyet alabilir")
} else if (age === 17) {
    console.log("seneye ehliyet alabilir")
} else {
    console.log("Ehliyet alamaz")
}