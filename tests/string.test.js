import { describe, it, expect } from 'vitest';
import { 
  capitalize,
  countChars,
  camelCase,
  ellipsis,
  escapeHtml,
  endsWith,
  includesText,
  isEmail,
  isURL,
  join,
  kebabCase,
  maskString,
  padEnd,
  padStart,
  pascalCase,
  repeat,
  replaceText,
  reverseString,
  slice,
  snakeCase,
  split,
  startsWith,
  stripHtml,
  toLower,
  toUpper,
  trim,
  trimEnd,
  trimStart,
  truncate,
  unescapeHtml,
  wordCount,
  words
} from '../src/string/index.js';

describe('String Functions', () => {
  describe('reverseString', () => {
    it('should reverse a string', () => {
      expect(reverseString('hello')).toBe('olleh');
    });

    it('should reverse a string with numbers', () => {
      expect(reverseString('123')).toBe('321');
    });

    it('should return empty string for empty string', () => {
      expect(reverseString('')).toBe('');
    });

    it('should return empty string for non-string input', () => {
      expect(reverseString(null)).toBe('');
      expect(reverseString(123)).toBe('');
    });
  });

  describe('countChars', () => {
    it('should count characters in a string', () => {
      expect(countChars('hello')).toBe(5);
    });

    it('should count characters including spaces and punctuation', () => {
      expect(countChars('Hello world!')).toBe(12);
    });

    it('should return 0 for empty string', () => {
      expect(countChars('')).toBe(0);
    });

    it('should return 0 for non-string input', () => {
      expect(countChars(null)).toBe(0);
      expect(countChars(123)).toBe(0);
    });
  });

  describe('capitalize', () => {
    it('should capitalize the first letter', () => {
      expect(capitalize('gino')).toBe('Gino');
    });

    it('should transform the rest to lowercase', () => {
      expect(capitalize('CIAO')).toBe('Ciao');
      expect(capitalize('jAvAsCrIpT')).toBe('Javascript');
    });

    it('should return empty string for empty string', () => {
      expect(capitalize('')).toBe('');
    });

    it('should return empty string for non-string input', () => {
      expect(capitalize(null)).toBe('');
    });
  });

  describe('truncate', () => {
    it('should truncate a string to N characters', () => {
      expect(truncate('hello world', 5)).toBe('hello');
    });

    it('should return the original string if it is shorter than max', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });

    it('should return empty string if max <= 0', () => {
      expect(truncate('hello', 0)).toBe('');
      expect(truncate('hello', -1)).toBe('');
    });

    it('should return empty string for non-string input', () => {
      expect(truncate(null, 5)).toBe('');
    });
  });

  describe('includesText', () => {
    it('should return true if substring is contained', () => {
      expect(includesText('Hello world', 'Hello')).toBe(true);
      expect(includesText('Hello world', 'world')).toBe(true);
    });

    it('should return false if substring is not contained', () => {
      expect(includesText('Hello world', 'World')).toBe(false);
    });

    it('should be case-sensitive', () => {
      expect(includesText('Hello', 'hello')).toBe(false);
    });

    it('should return false for non-string inputs', () => {
      expect(includesText(123, 'hello')).toBe(false);
      expect(includesText('hello', null)).toBe(false);
    });
  });

  describe('replaceText', () => {
    it('should replace all occurrences', () => {
      expect(replaceText('hello hello', 'hello', 'goodbye')).toBe('goodbye goodbye');
    });

    it('should return the original string if text is not found', () => {
      expect(replaceText('hello', 'x', 'y')).toBe('hello');
    });

    it('should replace with empty string', () => {
      expect(replaceText('JavaScript', 'Script', '')).toBe('Java');
    });

    it('should return empty string for non-string input', () => {
      expect(replaceText(null, 'a', 'b')).toBe('');
    });
  });

  describe('camelCase', () => {
    it('should convert string to camelCase', () => {
      expect(camelCase('hello_world')).toBe('helloWorld');
      expect(camelCase('Hello World')).toBe('helloWorld');
      expect(camelCase('foo-bar')).toBe('fooBar');
    });

    it('should return empty string for non-string input', () => {
      expect(camelCase(null)).toBe('');
    });

    it('should handle empty string', () => {
      expect(camelCase('')).toBe('');
    });
  });

  describe('snakeCase', () => {
    it('should convert string to snake_case', () => {
      expect(snakeCase('helloWorld')).toBe('hello_world');
      expect(snakeCase('Hello World')).toBe('hello_world');
      expect(snakeCase('foo-bar')).toBe('foo_bar');
    });

    it('should return empty string for non-string input', () => {
      expect(snakeCase(null)).toBe('');
    });

    it('should handle empty string', () => {
      expect(snakeCase('')).toBe('');
    });
  });

  describe('kebabCase', () => {
    it('should convert string to kebab-case', () => {
      expect(kebabCase('helloWorld')).toBe('hello-world');
      expect(kebabCase('Hello World')).toBe('hello-world');
      expect(kebabCase('foo_bar')).toBe('foo-bar');
    });

    it('should return empty string for non-string input', () => {
      expect(kebabCase(null)).toBe('');
    });

    it('should handle empty string', () => {
      expect(kebabCase('')).toBe('');
    });
  });

  describe('pascalCase', () => {
    it('should convert string to PascalCase', () => {
      expect(pascalCase('hello_world')).toBe('HelloWorld');
      expect(pascalCase('hello world')).toBe('HelloWorld');
      expect(pascalCase('foo-bar')).toBe('FooBar');
    });

    it('should return empty string for non-string input', () => {
      expect(pascalCase(null)).toBe('');
    });

    it('should handle empty string', () => {
      expect(pascalCase('')).toBe('');
    });
  });

  describe('trimStart', () => {
    it('should remove whitespace from the beginning', () => {
      expect(trimStart('  hello')).toBe('hello');
      expect(trimStart('\t\nhello')).toBe('hello');
    });

    it('should return empty string for non-string input', () => {
      expect(trimStart(null)).toBe('');
    });

    it('should handle empty string', () => {
      expect(trimStart('')).toBe('');
    });
  });

  describe('trimEnd', () => {
    it('should remove whitespace from the end', () => {
      expect(trimEnd('hello  ')).toBe('hello');
      expect(trimEnd('hello\t\n')).toBe('hello');
    });

    it('should return empty string for non-string input', () => {
      expect(trimEnd(null)).toBe('');
    });

    it('should handle empty string', () => {
      expect(trimEnd('')).toBe('');
    });
  });

  describe('repeat', () => {
    it('should repeat string n times', () => {
      expect(repeat('a', 3)).toBe('aaa');
      expect(repeat('hello', 2)).toBe('hellohello');
    });

    it('should return empty string for n <= 0', () => {
      expect(repeat('a', 0)).toBe('');
      expect(repeat('a', -1)).toBe('');
    });

    it('should return empty string for non-string input', () => {
      expect(repeat(null, 3)).toBe('');
    });
  });

  describe('words', () => {
    it('should split string into words', () => {
      expect(words('hello world')).toEqual(['hello', 'world']);
      expect(words('foo bar baz')).toEqual(['foo', 'bar', 'baz']);
    });

    it('should return empty array for non-string input', () => {
      expect(words(null)).toEqual([]);
    });

    it('should handle empty string', () => {
      expect(words('')).toEqual([]);
    });

    it('should handle multiple spaces', () => {
      expect(words('hello   world')).toEqual(['hello', 'world']);
    });
  });

  describe('startsWith', () => {
    it('should return true if string starts with substring', () => {
      expect(startsWith('hello world', 'hello')).toBe(true);
    });

    it('should return false if string does not start with substring', () => {
      expect(startsWith('hello world', 'world')).toBe(false);
    });

    it('should respect position parameter', () => {
      expect(startsWith('hello world', 'world', 6)).toBe(true);
    });

    it('should return false for non-string inputs', () => {
      expect(startsWith(null, 'hello')).toBe(false);
      expect(startsWith('hello', null)).toBe(false);
    });
  });

  describe('endsWith', () => {
    it('should return true if string ends with substring', () => {
      expect(endsWith('hello world', 'world')).toBe(true);
    });

    it('should return false if string does not end with substring', () => {
      expect(endsWith('hello world', 'hello')).toBe(false);
    });

    it('should respect length parameter', () => {
      expect(endsWith('hello world', 'hello', 5)).toBe(true);
    });

    it('should return false for non-string inputs', () => {
      expect(endsWith(null, 'world')).toBe(false);
      expect(endsWith('world', null)).toBe(false);
    });
  });

  describe('padStart', () => {
    it('should pad string at start', () => {
      expect(padStart('hello', 10)).toBe('     hello');
      expect(padStart('hello', 10, '-')).toBe('-----hello');
    });

    it('should return original string if already long enough', () => {
      expect(padStart('hello', 3)).toBe('hello');
    });

    it('should return empty string for non-string input', () => {
      expect(padStart(null, 10)).toBe('');
    });
  });

  describe('padEnd', () => {
    it('should pad string at end', () => {
      expect(padEnd('hello', 10)).toBe('hello     ');
      expect(padEnd('hello', 10, '-')).toBe('hello-----');
    });

    it('should return original string if already long enough', () => {
      expect(padEnd('hello', 3)).toBe('hello');
    });

    it('should return empty string for non-string input', () => {
      expect(padEnd(null, 10)).toBe('');
    });
  });

  describe('toLower', () => {
    it('should convert string to lowercase', () => {
      expect(toLower('HELLO')).toBe('hello');
      expect(toLower('Hello World')).toBe('hello world');
    });

    it('should return empty string for non-string input', () => {
      expect(toLower(null)).toBe('');
    });

    it('should handle empty string', () => {
      expect(toLower('')).toBe('');
    });
  });

  describe('toUpper', () => {
    it('should convert string to uppercase', () => {
      expect(toUpper('hello')).toBe('HELLO');
      expect(toUpper('Hello World')).toBe('HELLO WORLD');
    });

    it('should return empty string for non-string input', () => {
      expect(toUpper(null)).toBe('');
    });

    it('should handle empty string', () => {
      expect(toUpper('')).toBe('');
    });
  });

  describe('trim', () => {
    it('should remove whitespace from both ends', () => {
      expect(trim('  hello  ')).toBe('hello');
      expect(trim('\t\nhello\t\n')).toBe('hello');
    });

    it('should return empty string for non-string input', () => {
      expect(trim(null)).toBe('');
    });

    it('should handle empty string', () => {
      expect(trim('')).toBe('');
    });
  });

  describe('split', () => {
    it('should split string by separator', () => {
      expect(split('hello world', ' ')).toEqual(['hello', 'world']);
      expect(split('a,b,c', ',')).toEqual(['a', 'b', 'c']);
    });

    it('should return empty array for non-string input', () => {
      expect(split(null, ' ')).toEqual([]);
    });

    it('should handle limit parameter', () => {
      expect(split('a,b,c,d', ',', 2)).toEqual(['a', 'b']);
    });
  });

  describe('join', () => {
    it('should join array elements with separator', () => {
      expect(join(['a', 'b', 'c'], '-')).toBe('a-b-c');
      expect(join(['hello', 'world'])).toBe('hello,world');
    });

    it('should return empty string for non-array input', () => {
      expect(join(null)).toBe('');
    });

    it('should handle empty array', () => {
      expect(join([], '-')).toBe('');
    });
  });

  describe('slice', () => {
    it('should extract section of string', () => {
      expect(slice('hello world', 0, 5)).toBe('hello');
      expect(slice('hello world', 6)).toBe('world');
    });

    it('should return empty string for non-string input', () => {
      expect(slice(null, 0, 5)).toBe('');
    });

    it('should handle negative indices', () => {
      expect(slice('hello', -3)).toBe('llo');
      expect(slice('hello', 0, -2)).toBe('hel');
    });
  });

  describe('escapeHtml', () => {
    it('should escape & to &amp;', () => {
      expect(escapeHtml('a & b')).toBe('a &amp; b');
    });

    it('should escape < to &lt;', () => {
      expect(escapeHtml('a < b')).toBe('a &lt; b');
    });

    it('should escape > to &gt;', () => {
      expect(escapeHtml('a > b')).toBe('a &gt; b');
    });

    it('should escape " to &quot;', () => {
      expect(escapeHtml('say "hello"')).toBe('say &quot;hello&quot;');
    });

    it('should escape apostrophe to &#x27;', () => {
      expect(escapeHtml("it's")).toBe("it&#x27;s");
    });

    it('should return empty string for non-string input', () => {
      expect(escapeHtml(null)).toBe('');
    });
  });

  describe('unescapeHtml', () => {
    it('should unescape &amp; to &', () => {
      expect(unescapeHtml('a &amp; b')).toBe('a & b');
    });

    it('should unescape &lt; to <', () => {
      expect(unescapeHtml('a &lt; b')).toBe('a < b');
    });

    it('should unescape &gt; to >', () => {
      expect(unescapeHtml('a &gt; b')).toBe('a > b');
    });

    it('should unescape &quot; to "', () => {
      expect(unescapeHtml('say &quot;hello&quot;')).toBe('say "hello"');
    });

    it('should unescape &#x27; to apostrophe', () => {
      expect(unescapeHtml("it&#x27;s")).toBe("it's");
    });

    it('should return empty string for non-string input', () => {
      expect(unescapeHtml(null)).toBe('');
    });
  });

  describe('stripHtml', () => {
    it('should remove single HTML tag', () => {
      expect(stripHtml('<p>hello</p>')).toBe('hello');
    });

    it('should remove multiple HTML tags', () => {
      expect(stripHtml('<div><p>hello</p></div>')).toBe('hello');
    });

    it('should remove self-closing tags', () => {
      expect(stripHtml('hello<br/>world')).toBe('helloworld');
    });

    it('should remove tags with attributes', () => {
      expect(stripHtml('<a href="#">link</a>')).toBe('link');
    });

    it('should return empty string for non-string input', () => {
      expect(stripHtml(null)).toBe('');
    });

    it('should handle empty string', () => {
      expect(stripHtml('')).toBe('');
    });
  });

  describe('isEmail', () => {
    it('should return true for valid email', () => {
      expect(isEmail('test@example.com')).toBe(true);
      expect(isEmail('user.name@example.co.uk')).toBe(true);
      expect(isEmail('test123@example.com')).toBe(true);
    });

    it('should return false for invalid email', () => {
      expect(isEmail('not an email')).toBe(false);
      expect(isEmail('@example.com')).toBe(false);
      expect(isEmail('test@.com')).toBe(false);
      expect(isEmail('test@example')).toBe(false);
    });

    it('should return false for non-string input', () => {
      expect(isEmail(null)).toBe(false);
      expect(isEmail(123)).toBe(false);
    });
  });

  describe('isURL', () => {
    it('should return true for valid URL', () => {
      expect(isURL('https://example.com')).toBe(true);
      expect(isURL('http://localhost:3000')).toBe(true);
      expect(isURL('ftp://example.com')).toBe(true);
    });

    it('should return false for invalid URL', () => {
      expect(isURL('not a url')).toBe(false);
      expect(isURL('example.com')).toBe(false);
    });

    it('should return false for non-string input', () => {
      expect(isURL(null)).toBe(false);
      expect(isURL(123)).toBe(false);
    });
  });

  describe('maskString', () => {
    it('should mask all but last 4 characters by default', () => {
      expect(maskString('1234567890')).toBe('******7890');
    });

    it('should respect visibleChars parameter', () => {
      expect(maskString('1234567890', 2)).toBe('********90');
      expect(maskString('1234567890', 6)).toBe('****567890');
    });

    it('should use custom mask character', () => {
      expect(maskString('abcdef', 2, '-')).toBe('----ef');
    });

    it('should return full string if shorter than visibleChars', () => {
      expect(maskString('abc', 10)).toBe('abc');
    });

    it('should return empty string for non-string input', () => {
      expect(maskString(null)).toBe('');
    });
  });

  describe('wordCount', () => {
    it('should count words in a string', () => {
      expect(wordCount('hello world')).toBe(2);
      expect(wordCount('one two three')).toBe(3);
    });

    it('should return 0 for empty string', () => {
      expect(wordCount('')).toBe(0);
    });

    it('should handle multiple spaces', () => {
      expect(wordCount('hello   world')).toBe(2);
    });

    it('should return 0 for non-string input', () => {
      expect(wordCount(null)).toBe(0);
      expect(wordCount(123)).toBe(0);
    });

    it('should handle leading/trailing spaces', () => {
      expect(wordCount('  hello world  ')).toBe(2);
    });
  });

  describe('ellipsis', () => {
    it('should truncate and add ellipsis', () => {
      expect(ellipsis('hello world', 8)).toBe('hello...');
    });

    it('should return original string if shorter than maxLength', () => {
      expect(ellipsis('hello', 10)).toBe('hello');
    });

    it('should handle maxLength less than ellipsis length', () => {
      expect(ellipsis('hello world', 2)).toBe('..');
      expect(ellipsis('hello world', 1)).toBe('.');
    });

    it('should return empty string if maxLength <= 0', () => {
      expect(ellipsis('hello', 0)).toBe('');
      expect(ellipsis('hello', -1)).toBe('');
    });

    it('should return empty string for non-string input', () => {
      expect(ellipsis(null, 10)).toBe('');
    });
  });
});
