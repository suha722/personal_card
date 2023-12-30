function normalize(str) {
    return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
}

function isAnagramInArray(anagram, arr) {
    const matchingAnagrams = [];
    anagram = normalize(anagram)
    for (const word of arr) {
        if (anagram == normalize(word)) {
            matchingAnagrams.push(word);
        }
    }
    return matchingAnagrams;
}

const anagrams = [
    "oz bilal tochberer",
    "it's razorbill beachcomber",
    "och robe tilblazer",
    "bib chorizo cellarmaster",
    "thor bble carizole",
    "zll borcht aberoie",
    "brzl orche atobile",
    "dame shelburne characterizing",
    "uber englishman characterized",
    "agnes rhumbline characterized",
    "rehab scrutinized charlemagne",
    "dreams zurich interchangeable",
    "bam hamster technocratic",
    "mechatronic masterbatch",
    "bam ratchet mechatronics"
];

console.log(isAnagramInArray("Bob Ziroll Teacher", anagrams));