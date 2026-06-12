// ============================================
// FAMILY WORLD CUP 2026 - DRAW DATA
// Owner assignments, tiers, groups
// ============================================

// Maps FIFA team names (as they appear in football-data.org) to owner + tier + flag
const TEAM_DATA = {
  // Group A
  "Mexico":          { owner: "Sharice",    tier: 2, group: "A", flag: "🇲🇽" },
  "South Africa":    { owner: "Noud & Liz",  tier: 3, group: "A", flag: "🇿🇦" },
  "Korea Republic":  { owner: "Wouter",      tier: 2, group: "A", flag: "🇰🇷" },
  "Czech Republic":  { owner: "Jose",        tier: 3, group: "A", flag: "🇨🇿" },

  // Group B
  "Canada":          { owner: "Sjoerd",      tier: 3, group: "B", flag: "🇨🇦" },
  "Bosnia and Herzegovina": { owner: "Zoë",  tier: 4, group: "B", flag: "🇧🇦" },
  "Qatar":           { owner: "Ruairi",      tier: 4, group: "B", flag: "🇶🇦" },
  "Switzerland":     { owner: "Jose",        tier: 2, group: "B", flag: "🇨🇭" },

  // Group C
  "Brazil":          { owner: "Zoë",         tier: 1, group: "C", flag: "🇧🇷" },
  "Morocco":         { owner: "Piet",        tier: 2, group: "C", flag: "🇲🇦" },
  "Haiti":           { owner: "Piet",        tier: 4, group: "C", flag: "🇭🇹" },
  "Scotland":        { owner: "Zoë",         tier: 3, group: "C", flag: "🏴" },

  // Group D
  "United States":   { owner: "Jim",         tier: 1, group: "D", flag: "🇺🇸" },
  "Paraguay":        { owner: "Julia",       tier: 3, group: "D", flag: "🇵🇾" },
  "Australia":       { owner: "Saskia",      tier: 2, group: "D", flag: "🇦🇺" },
  "Türkiye":         { owner: "Julia",       tier: 2, group: "D", flag: "🇹🇷" },

  // Group E
  "Germany":         { owner: "Piet",        tier: 1, group: "E", flag: "🇩🇪" },
  "Curaçao":         { owner: "Jim",         tier: 4, group: "E", flag: "🇨🇼" },
  "Ivory Coast":     { owner: "Ruairi",      tier: 3, group: "E", flag: "🇨🇮" },
  "Ecuador":         { owner: "Ruairi",      tier: 2, group: "E", flag: "🇪🇨" },

  // Group F
  "Netherlands":     { owner: "Julia",       tier: 1, group: "F", flag: "🇳🇱" },
  "Japan":           { owner: "Danielle",    tier: 2, group: "F", flag: "🇯🇵" },
  "Sweden":          { owner: "Sjoerd",      tier: 2, group: "F", flag: "🇸🇪" },
  "Tunisia":         { owner: "Danielle",    tier: 3, group: "F", flag: "🇹🇳" },

  // Group G
  "Belgium":         { owner: "Sjoerd",      tier: 1, group: "G", flag: "🇧🇪" },
  "Egypt":           { owner: "Wouter",      tier: 3, group: "G", flag: "🇪🇬" },
  "Iran":            { owner: "Jim",         tier: 3, group: "G", flag: "🇮🇷" },
  "New Zealand":     { owner: "Saskia",      tier: 4, group: "G", flag: "🇳🇿" },

  // Group H
  "Spain":           { owner: "Danielle",    tier: 1, group: "H", flag: "🇪🇸" },
  "Cape Verde":      { owner: "Wouter",      tier: 4, group: "H", flag: "🇨🇻" },
  "Saudi Arabia":    { owner: "Sharice",     tier: 4, group: "H", flag: "🇸🇦" },
  "Uruguay":         { owner: "Noud & Liz",  tier: 1, group: "H", flag: "🇺🇾" },

  // Group I
  "France":          { owner: "Wouter",      tier: 1, group: "I", flag: "🇫🇷" },
  "Senegal":         { owner: "Zoë",         tier: 2, group: "I", flag: "🇸🇳" },
  "Iraq":            { owner: "Julia",       tier: 4, group: "I", flag: "🇮🇶" },
  "Norway":          { owner: "Jim",         tier: 2, group: "I", flag: "🇳🇴" },

  // Group J
  "Argentina":       { owner: "Jose",        tier: 1, group: "J", flag: "🇦🇷" },
  "Algeria":         { owner: "Saskia",      tier: 3, group: "J", flag: "🇩🇿" },
  "Austria":         { owner: "Noud & Liz",  tier: 2, group: "J", flag: "🇦🇹" },
  "Jordan":          { owner: "Jose",        tier: 4, group: "J", flag: "🇯🇴" },

  // Group K
  "Portugal":        { owner: "Sharice",     tier: 1, group: "K", flag: "🇵🇹" },
  "DR Congo":        { owner: "Noud & Liz",  tier: 4, group: "K", flag: "🇨🇩" },
  "Uzbekistan":      { owner: "Danielle",    tier: 4, group: "K", flag: "🇺🇿" },
  "Colombia":        { owner: "Ruairi",      tier: 1, group: "K", flag: "🇨🇴" },

  // Group L
  "England":         { owner: "Saskia",      tier: 1, group: "L", flag: "🏴" },
  "Croatia":         { owner: "Piet",        tier: 3, group: "L", flag: "🇭🇷" },
  "Ghana":           { owner: "Ruairi",      tier: 3, group: "L", flag: "🇬🇭" },
  "Panama":          { owner: "Sjoerd",      tier: 4, group: "L", flag: "🇵🇦" }
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
