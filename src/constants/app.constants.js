// src/constants/app.constants.js

// User roles
const UserRole = Object.freeze({
  Admin: 'Admin',
  Editor: 'Editor',
  Teacher: 'Teacher',
  Student: 'Student',
});

// User status
const UserStatus = Object.freeze({
  Active: 'Active',
  Inactive: 'Inactive',
  Suspended: 'Suspended',
  Pending: 'Pending',
});

// Topic categories
const TopicCategory = Object.freeze({
  Grammar: 'Grammar',
  Vocabulary: 'Vocabulary',
  Skills: 'Skills',
  Writing: 'Writing',
  Speaking: 'Speaking',
});

// Publish status
const PublishStatus = Object.freeze({
  Published: 'Published',
  Draft: 'Draft',
});

// CEFR Levels
const CEFRLevel = Object.freeze({
  A1: 'A1',
  A2: 'A2',
  B1: 'B1',
  B2: 'B2',
  C1: 'C1',
  C2: 'C2',
});

// Question types
const QuestionType = Object.freeze({
  MCQ: 'MCQ',
  MultiSelect: 'MultiSelect',
  FillBlank: 'FillBlank',
  TrueFalse: 'TrueFalse',
});

// Difficulty levels
const DifficultyLevel = Object.freeze({
  Easy: 'Easy',
  Medium: 'Medium',
  Hard: 'Hard',
});

// Example QuestionTopic (customize as needed)
const QuestionTopic = Object.freeze({
  Grammar: 'Grammar',
  Vocabulary: 'Vocabulary',
  Skills: 'Skills',
  Writing: 'Writing',
  Speaking: 'Speaking',
});

module.exports = {
  UserRole,
  UserStatus,
  TopicCategory,
  PublishStatus,
  CEFRLevel,
  QuestionType,
  DifficultyLevel,
  QuestionTopic,
};
