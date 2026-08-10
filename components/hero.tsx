"use client";

import { useState } from "react";

const questions = [
  {
    question:
      "Can an AI agent, application, or other automated system change a record in your production business system?",
    options: [
      "Yes, if it has access",
      "No, automated systems cannot write",
      "Only when the action is authorized",
      "Only when a human is watching",
    ],
    correct: 2,
  },
  {
    question:
      "If a system has read access, does that give it authority to write?",
    options: [
      "Yes",
      "No",
      "Only for trusted systems",
      "Only for low-risk data",
    ],
    correct: 1,
  },
  {
    question:
      "Where should authority over a state-changing action be enforced?",
    options: [
      "Inside the AI model",
      "In the system prompt",
      "At the execution authorization boundary",
      "In the requester's memory",
    ],
    correct: 2,
  },
  {
    question:
      "How do you ensure the action that gets written is the action that was authorized?",
    options: [
      "Trust the requester",
      "Review the logs afterward",
      "Bind the authorization to the transaction",
      "Ask the user again after execution",
    ],
    correct: 2,
  },
  {
    question:
      "Who remains accountable when an AI agent, application, or person changes your business system?",
    options: [
      "The AI model",
      "The vendor",
      "The institution operating the system",
      "The requester itself",
    ],
    correct: 2,
  },
];

export default function Hero() {
  const [showTest, setShowTest] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const score = answers.reduce(
    (total, answer, index) =>
      total + (answer === questions[index]?.correct ? 1 : 0),
    0
  );

  const startTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setShowTest(true);
  };

  const closeTest = () => {
    setShowTest(false);
    setShowResults(false);
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const selectAnswer = (index: number) => {
    const nextAnswers = [...answers];
    nextAnswers[currentQuestion] = index;
    setAnswers(nextAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="py-24 lg:py-32">
            <p className="text-sm font-medium tracking-[0.2em] text-neutral-500">
              INSTITUTIONAL AUTHORITY INFRASTRUCTURE
            </p>

            <h1 className="mt-8 max-w-6xl text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
              AI may decide.
              <br />
              You decide what becomes real.
            </h1>

            <div className="mt-10 max-w-4xl">
              <p className="text-xl leading-9 text-neutral-700">
                Parmana is technology-agnostic infrastructure that protects
                institutional authority over what is allowed to become
                real-world execution, whether the request comes from an AI
                agent, an application, or a person. Only what you authorize
                should become real.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={startTest}
                className="inline-flex h-12 items-center justify-center rounded-md bg-black px-8 text-sm font-medium !text-white transition-colors duration-200 hover:bg-neutral-800"
              >
                Test Your Authority Over Execution
              </button>

              <a
                href="/architecture"
                className="inline-flex h-12 items-center justify-center rounded-md border border-neutral-300 bg-white px-8 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:border-black hover:bg-neutral-50"
              >
                Explore Architecture
              </a>
            </div>
          </div>
        </div>
      </section>

      {showTest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium tracking-[0.2em] text-neutral-500">
                  EXECUTION AUTHORITY TEST
                </p>

                {!showResults && (
                  <p className="mt-2 text-sm text-neutral-500">
                    Question {currentQuestion + 1} of {questions.length}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={closeTest}
                className="text-2xl leading-none text-neutral-400 hover:text-black"
                aria-label="Close test"
              >
                ×
              </button>
            </div>

            {!showResults ? (
              <>
                <div className="mt-10">
                  <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                    {questions[currentQuestion].question}
                  </h2>

                  <div className="mt-8 space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => selectAnswer(index)}
                        className={`w-full rounded-lg border p-4 text-left transition-colors ${
                          answers[currentQuestion] === index
                            ? "border-black bg-neutral-100"
                            : "border-neutral-200 hover:border-black"
                        }`}
                      >
                        <span className="mr-2 font-medium">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={nextQuestion}
                    disabled={answers[currentQuestion] === undefined}
                    className="inline-flex h-11 items-center justify-center rounded-md bg-black px-7 text-sm font-medium !text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    {currentQuestion === questions.length - 1
                      ? "See Results"
                      : "Next"}
                  </button>
                </div>
              </>
            ) : (
              <div className="py-10 text-center">
                <p className="text-sm font-medium tracking-[0.2em] text-neutral-500">
                  YOUR RESULT
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900">
                  {score} / {questions.length}
                </h2>

                <h3 className="mt-6 text-2xl font-semibold text-neutral-900">
                  {score === questions.length
                    ? "You understand the execution authority boundary."
                    : score >= 3
                      ? "You may have an execution authority gap."
                      : "Your execution authority may need stronger controls."}
                </h3>

                <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-neutral-600">
                  The critical question is whether your institution, not
                  who or what requested it, determines what is allowed to
                  become real.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={startTest}
                    className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 px-6 text-sm font-medium text-neutral-900 hover:border-black"
                  >
                    Retake Test
                  </button>

                  <a
                    href="/architecture"
                    onClick={closeTest}
                    className="inline-flex h-11 items-center justify-center rounded-md bg-black px-6 text-sm font-medium !text-white hover:bg-neutral-800"
                  >
                    Explore Architecture
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}