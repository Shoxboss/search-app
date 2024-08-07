import { inject, injectable } from "inversify";
import { Logger } from "winston";
import { DI_TYPES } from "../di/types";

const data = [
  { email: "jim@gmail.com", number: "221122" },
  { email: "jam@gmail.com", number: "830347" },
  { email: "john@gmail.com", number: "221122" },
  { email: "jams@gmail.com", number: "349425" },
  { email: "jams@gmail.com", number: "141424" },
  { email: "jill@gmail.com", number: "822287" },
  { email: "jill@gmail.com", number: "822286" },
];

@injectable()
export class SearchService {
  constructor(@inject(DI_TYPES.Logger) private _logger: Logger) {}

  async search(email: string, number: string) {
    const results = data.filter((item) => {
      return (
        (!email || item.email === email) && (!number || item.number === number)
      );
    });

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 5000);
    });

    return results;
  }
}
