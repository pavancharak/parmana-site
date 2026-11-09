const icon = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAALQAAAC0AQMAAAAHA5RxAAAABlBMVEX///8eG0sLQg6GAAABEklEQVR42u2UPU7DQBBG3zhW4oIiJR0cgRuEo3CT+CgcxUfgCKajXCQKEzkZiqD1/hlppUg0M908f/52Z3Z3RCnFZ0M5jBs3jor0vEu7fFBVVZ3hcAEO11Tdr36G8QS8JT4TuA/gK+EOplfgnPiPsAPgGPsD14c8ZPs/QbBwWte0wufK/lxWuK759JX9Hyr1Y6Xe3eCeHCfy8wJ0hl16XiDB303kKUXe+q7Ze/w33vmz8PEtN/TfV+ofK/XPf+uje7vkLtXLin9TWW+7wruMbwF4yriEZYVzsl/SaP8vwKawn3vgrsC3wbIhl5HNkNYB8KD2XowbN57x/TLZIt75wR/z1g/4mDfBxAvnj6j12bhxHz/Rn268MZ6lzQAAAABJRU5ErkJggg==", "base64");

export function GET() {
  return new Response(icon, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
