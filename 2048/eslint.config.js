module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',// nutzt die neueste JavaScript-Version
      sourceType: 'script'// nutzt die neueste JavaScript-Version
    },
    rules: {
      'no-unused-vars':'warn',// warnt vor deklarierten, aber unbenutzten Variablen
      'prefer-const': 'warn',// warnt, wenn Variablen nie neu zugewiesen werden, aber nicht als const deklariert sind
      'eqeqeq': 'warn',// warnt bei losem Vergleich (== statt ===)
      'curly': 'warn', // warnt bei if/else ohne geschwungene Klammern
      'no-var': 'warn', // warnt bei Verwendung von var statt let/const
      'no-console': 'warn', // warnt bei console.log / Debug-Ausgaben

      'semi':'warn', // warnt bei fehlenden oder inkonsistenten Semikolons
      'quotes': ['warn', 'single'],// erzwingt einfache Anführungszeichen (' statt ' ')
      'no-else-return': 'warn',// warnt bei unnötigem else nach return
      'brace-style': 'warn',// warnt bei inkonsistenter Klammerposition (z. B. gleiche vs neue Zeile)
      'camelcase': 'warn', // warnt bei Variablennamen, die nicht camelCase sind
      'indent': ['warn', 2], // warnt bei falscher Einrückung (2 Spaces erwartet)
      'no-undef': 'error', // Fehler bei Verwendung nicht deklarierter Variablen
      'no-redeclare': 'error', // Fehler bei mehrfacher Deklaration derselben Variable
      'space-infix-ops': 'warn',// warnt bei fehlenden Leerzeichen um Operatoren (+, =, etc.)
      'no-multi-spaces': 'warn' // warnt bei unnötigen mehrfachen Leerzeichen im Code
    }
  }
];