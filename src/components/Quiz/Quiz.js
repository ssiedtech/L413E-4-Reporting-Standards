export const quiz = {
  quizTitle: 'Check on Learning',
  questions: [
    {
      question: "Which system produces the Army's financial statements?",
      questionType: 'text',
      answers: ['DDRS-ARS', 'DDRS-AFS', 'GFRS-ARS', 'GFRS-AFS', 'GFRS-B'],
      correctAnswer: '2',
      answerSelectionType: 'single',
    },
    {
      question:
        'Which of the following does DDRS do when it receives the GFEBS Trial Balance?',
      answers: [
        'Collects proprietary USSGL account balance information.',
        "Produces the Treasury's government-wide consolidated financial statement.",
        "Produces the Army's Financial Statements and Budget Execution Reports",
        'Rejects it: DDRS does not accept Trial Balance data from GFEBS.',
      ],
      questionType: 'text',
      correctAnswer: '3',
    },
    {
      question: 'What is SFIS?',
      answers: [
        'Standard Financial Inquiry System.',
        'DoD’s standard for categorizing financial information to support financial management and reporting functions.',
        "Treasury's standard for importing a chart of accounts.",
      ],
      correctAnswer: '2',
      questionType: 'text',
    },
    {
      question:
        'FACTS I, FACTS II and GFRS link the financial statements from the Army and other Federal Agencies to the Financial Report of the United States Government.',
      answers: ['True', 'False'],
      correctAnswer: '1',
      questionType: 'text',
    },
    {
      question: 'What is BEIS?',
      answers: [
        'A contractor company that supplies custom financials software.',
        'A DoD organization that publishes the SFIS standards',
        'An organization established by DoD to maintain SFIS and run DDRS.',
        'A DoD organization that operates FACTS I and II.',
      ],
      correctAnswer: '3',
      questionType: 'text',
    },
  ],
};
