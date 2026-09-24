export const remixInterests = [
  { id: 'technology', label: 'TECHNOLOGY' },
  { id: 'design', label: 'DESIGN' },
  { id: 'business', label: 'BUSINESS' },
  { id: 'content', label: 'CONTENT' },
  { id: 'social', label: 'SOCIAL' },
  { id: 'education', label: 'EDUCATION' },
]

export const remixPurposes = [
  { id: 'my-community', label: 'BUILD COMMUNITIES' },
  { id: 'a-business', label: 'GROW BUSINESSES' },
  { id: 'people-skills', label: 'DEVELOP SKILLS' },
  { id: 'the-environment', label: 'IMPROVE ENVIRONMENT' },
  { id: 'digital-experience', label: 'CREATE DIGITAL EXPERIENCES' },
]

const remixResults = {
  'technology:my-community': {
    title: 'BUILD A DIGITAL SOLUTION\nFOR YOUR COMMUNITY',
    description:
      'Combine your interest in technology with your desire to create meaningful change in your community.',
    directions: ['Community Platform', 'Digital Access', 'Local Services'],
    mix: 'TECHNOLOGY × BUILD COMMUNITIES',
  },
  'design:my-community': {
    title: 'DESIGN A BETTER LOCAL EXPERIENCE',
    description:
      'Turn your design thinking into better systems, spaces, and stories that help people feel seen and connected.',
    directions: ['Visual Identity', 'Public Space', 'Community Storytelling'],
    mix: 'DESIGN × BUILD COMMUNITIES',
  },
  'content:people-skills': {
    title: 'TURN KNOWLEDGE INTO A CREATIVE CAMPAIGN',
    description:
      'Blend storytelling with education so learning feels more alive, useful, and easy to share.',
    directions: ['Learning Series', 'Short-form Campaign', 'Youth Education'],
    mix: 'CONTENT × DEVELOP SKILLS',
  },
  'business:my-community': {
    title: 'BUILD A SOCIAL BUSINESS FOR THE NEIGHBORHOOD',
    description:
      'Use business thinking to create a model that helps your community while still being viable and sustainable.',
    directions: ['Local Service', 'Social Venture', 'Community Products'],
    mix: 'BUSINESS × BUILD COMMUNITIES',
  },
  'social:the-environment': {
    title: 'TURN CARE INTO ACTION FOR THE PLANET',
    description:
      'Channel your social awareness into actions that educate, engage, and restore people’s relationship with the environment.',
    directions: ['Eco Campaign', 'Volunteer Movement', 'Awareness Project'],
    mix: 'SOCIAL × IMPROVE ENVIRONMENT',
  },
  'education:digital-experience': {
    title: 'CREATE A DIGITAL LEARNING EXPERIENCE',
    description:
      'Use digital tools to make learning more interactive, welcoming, and easier to understand for many kinds of learners.',
    directions: ['Learning Platform', 'Interactive Guide', 'Skill Lab'],
    mix: 'EDUCATION × CREATE DIGITAL EXPERIENCES',
  },
  'technology:the-environment': {
    title: 'BUILD A SMART SOLUTION FOR THE EARTH',
    description:
      'Use technology to make sustainability easier to understand, track, and act on in everyday life.',
    directions: ['Impact Tracker', 'Eco Dashboard', 'Low-Tech Innovation'],
    mix: 'TECHNOLOGY × IMPROVE ENVIRONMENT',
  },
  'design:a-business': {
    title: 'CREATE A BRAND FOR A LOCAL BUSINESS',
    description:
      'Shape a memorable identity that helps a local business stand out and connect with the right audience.',
    directions: ['Brand Identity', 'Visual System', 'Campaign Design'],
    mix: 'DESIGN × GROW BUSINESSES',
  },
  'business:a-business': {
    title: 'BUILD A BUSINESS THAT CREATES VALUE',
    description:
      'Turn business thinking into a practical model that can grow sustainably while creating value for the people it serves.',
    directions: ['Business Model', 'Local Enterprise', 'Growth Strategy'],
    mix: 'BUSINESS × GROW BUSINESSES',
  },
  'technology:people-skills': {
    title: 'BUILD A DIGITAL SKILLS LAB',
    description:
      'Use technology to make useful skills easier to learn, practice, and share with more people.',
    directions: ['Learning Platform', 'Skill Workshops', 'Peer Network'],
    mix: 'TECHNOLOGY × DEVELOP SKILLS',
  },
}

export const getRemixResult = (interestId, purposeId) => {
  const key = `${interestId}:${purposeId}`

  if (remixResults[key]) {
    return remixResults[key]
  }

  const interestLabel = remixInterests.find((item) => item.id === interestId)?.label || 'CREATIVE'
  const purposeLabel = remixPurposes.find((item) => item.id === purposeId)?.label || 'MAKE AN IMPACT'
  const purposeIdeas = {
    'my-community': 'FOR YOUR COMMUNITY',
    'a-business': 'FOR A GROWING BUSINESS',
    'people-skills': 'TO DEVELOP PEOPLE\'S SKILLS',
    'the-environment': 'FOR A HEALTHIER ENVIRONMENT',
    'digital-experience': 'FOR A BETTER DIGITAL EXPERIENCE',
  }
  const ideaDirection = purposeIdeas[purposeId] || `TO ${purposeLabel}`

  return {
    title: `${interestId === 'technology' ? 'BUILD A DIGITAL SOLUTION' : interestId === 'design' ? 'DESIGN A BETTER EXPERIENCE' : interestId === 'business' ? 'BUILD A SUSTAINABLE MODEL' : interestId === 'content' ? 'CREATE A STORY THAT MOVES PEOPLE' : interestId === 'social' ? 'TURN CARE INTO COLLECTIVE ACTION' : 'CREATE A LEARNING EXPERIENCE'}\n${ideaDirection}`,
    description:
      'Blend your interests into a practical concept that can be developed, shared, and tested in the real world.',
    directions: ['Concept Framework', 'Audience Testing', 'Real-World Pilot'],
    mix: `${interestLabel} × ${purposeLabel}`,
  }
}
