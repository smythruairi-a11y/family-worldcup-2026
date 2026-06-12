// ============================================
// FAMILY WORLD CUP 2026 - DRAW DATA
// Owner assignments, tiers, groups
// ============================================

// Maps FIFA team names (as they appear in football-data.org) to owner + tier + flag
const TEAM_DATA = {
  // Group A
  "Mexico":          { owner: "Sharice",    tier: 2, group: "A", flag: "MX" },
  "South Africa":    { owner: "Noud & Liz",  tier: 3, group: "A", flag: "ZA" },
  "South Korea":  { owner: "Wouter",      tier: 2, group: "A", flag: "KR" },
  "Czechia":  { owner: "Jose",        tier: 3, group: "A", flag: "CZ" },

  // Group B
  "Canada":          { owner: "Sjoerd",      tier: 3, group: "B", flag: "CA" },
  "Bosnia-Herzegovina": { owner: "Zoë",  tier: 4, group: "B", flag: "BA" },
  "Qatar":           { owner: "Ruairi",      tier: 4, group: "B", flag: "QA" },
  "Switzerland":     { owner: "Jose",        tier: 2, group: "B", flag: "CH" },

  // Group C
  "Brazil":          { owner: "Zoë",         tier: 1, group: "C", flag: "BR" },
  "Morocco":         { owner: "Piet",        tier: 2, group: "C", flag: "MA" },
  "Haiti":           { owner: "Piet",        tier: 4, group: "C", flag: "HT" },
  "Scotland":        { owner: "Zoë",         tier: 3, group: "C", flag: "SC" },

  // Group D
  "United States":   { owner: "Jim",         tier: 1, group: "D", flag: "US" },
  "Paraguay":        { owner: "Julia",       tier: 3, group: "D", flag: "PY" },
  "Australia":       { owner: "Saskia",      tier: 2, group: "D", flag: "AU" },
  "Türkiye":         { owner: "Julia",       tier: 2, group: "D", flag: "TR" },

  // Group E
  "Germany":         { owner: "Piet",        tier: 1, group: "E", flag: "DE" },
  "Curaçao":         { owner: "Jim",         tier: 4, group: "E", flag: "CW" },
  "Ivory Coast":     { owner: "Sharice",     tier: 3, group: "E", flag: "CI" },
  "Ecuador":         { owner: "Ruairi",      tier: 2, group: "E", flag: "EC" },

  // Group F
  "Netherlands":     { owner: "Julia",       tier: 1, group: "F", flag: "NL" },
  "Japan":           { owner: "Danielle",    tier: 2, group: "F", flag: "JP" },
  "Sweden":          { owner: "Sjoerd",      tier: 2, group: "F", flag: "SE" },
  "Tunisia":         { owner: "Danielle",    tier: 3, group: "F", flag: "TN" },

  // Group G
  "Belgium":         { owner: "Sjoerd",      tier: 1, group: "G", flag: "BE" },
  "Egypt":           { owner: "Wouter",      tier: 3, group: "G", flag: "EG" },
  "Iran":            { owner: "Jim",         tier: 3, group: "G", flag: "IR" },
  "New Zealand":     { owner: "Saskia",      tier: 4, group: "G", flag: "NZ" },

  // Group H
  "Spain":           { owner: "Danielle",    tier: 1, group: "H", flag: "ES" },
  "Cape Verde":      { owner: "Wouter",      tier: 4, group: "H", flag: "CV" },
  "Saudi Arabia":    { owner: "Sharice",     tier: 4, group: "H", flag: "SA" },
  "Uruguay":         { owner: "Noud & Liz",  tier: 1, group: "H", flag: "UY" },

  // Group I
  "France":          { owner: "Wouter",      tier: 1, group: "I", flag: "FR" },
  "Senegal":         { owner: "Zoë",         tier: 2, group: "I", flag: "SN" },
  "Iraq":            { owner: "Julia",       tier: 4, group: "I", flag: "IQ" },
  "Norway":          { owner: "Jim",         tier: 2, group: "I", flag: "NO" },

  // Group J
  "Argentina":       { owner: "Jose",        tier: 1, group: "J", flag: "AR" },
  "Algeria":         { owner: "Saskia",      tier: 3, group: "J", flag: "DZ" },
  "Austria":         { owner: "Noud & Liz",  tier: 2, group: "J", flag: "AT" },
  "Jordan":          { owner: "Jose",        tier: 4, group: "J", flag: "JO" },

  // Group K
  "Portugal":        { owner: "Sharice",     tier: 1, group: "K", flag: "PT" },
  "DR Congo":        { owner: "Noud & Liz",  tier: 4, group: "K", flag: "CD" },
  "Uzbekistan":      { owner: "Danielle",    tier: 4, group: "K", flag: "UZ" },
  "Colombia":        { owner: "Ruairi",      tier: 1, group: "K", flag: "CO" },

  // Group L
  "England":         { owner: "Saskia",      tier: 1, group: "L", flag: "EN" },
  "Croatia":         { owner: "Piet",        tier: 3, group: "L", flag: "HR" },
  "Ghana":           { owner: "Ruairi",      tier: 3, group: "L", flag: "GH" },
  "Panama":          { owner: "Sjoerd",      tier: 4, group: "L", flag: "PA" }
};

// Owner colour classes (matches CSS)
const OWNER_CLASS = {
  "Danielle": "oc-danielle",
  "Jim": "oc-jim",
  "Jose": "oc-jose",
  "Julia": "oc-julia",
  "Noud & Liz": "oc-noudliz",
  "Piet": "oc-piet",
  "Ruairi": "oc-ruairi",
  "Saskia": "oc-saskia",
  "Sharice": "oc-sharice",
  "Sjoerd": "oc-sjoerd",
  "Wouter": "oc-wouter",
  "Zoë": "oc-zoe"
};

const ALL_OWNERS = ["Danielle","Jim","Jose","Julia","Noud & Liz","Piet","Ruairi","Saskia","Sharice","Sjoerd","Wouter","Zoë"];

const ALL_GROUPS = ["A","B","C","D","E","F","G","H","I","J","K","L"];

// Alternate spellings/names that football-data.org (or other sources) might use,
// mapped to the canonical key used in TEAM_DATA above.
const TEAM_ALIASES = {
  "Korea Republic": "South Korea",
  "Republic of Korea": "South Korea",
  "Czech Republic": "Czechia",
  "Bosnia and Herzegovina": "Bosnia-Herzegovina",
  "Bosnia & Herzegovina": "Bosnia-Herzegovina",
  "USA": "United States",
  "US": "United States",
  "Turkey": "Türkiye",
  "Curacao": "Curaçao",
  "Côte d'Ivoire": "Ivory Coast",
  "Cote d'Ivoire": "Ivory Coast",
  "Congo DR": "DR Congo",
  "DR Congo": "DR Congo",
  "Democratic Republic of the Congo": "DR Congo",
  "Cabo Verde": "Cape Verde",
  "Saudi-Arabia": "Saudi Arabia"
};

// Strip accents/diacritics and lowercase for robust matching
function foldName(name) {
  return (name || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

// Build a folded lookup index: foldedName -> canonical TEAM_DATA key
const FOLDED_INDEX = {};
Object.keys(TEAM_DATA).forEach(name => { FOLDED_INDEX[foldName(name)] = name; });
Object.entries(TEAM_ALIASES).forEach(([alt, canonical]) => {
  FOLDED_INDEX[foldName(alt)] = canonical;
});

// Look up a team in TEAM_DATA, trying aliases and folded matches if not found directly
function lookupTeam(name) {
  if (TEAM_DATA[name]) return TEAM_DATA[name];
  const alias = TEAM_ALIASES[name];
  if (alias && TEAM_DATA[alias]) return TEAM_DATA[alias];
  const folded = FOLDED_INDEX[foldName(name)];
  if (folded && TEAM_DATA[folded]) return TEAM_DATA[folded];
  return null;
}
