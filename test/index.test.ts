import remindate from "../lib";

describe("recurring dates", () => {
  test("every day", () => {
    expect(remindate("every day")).toHaveProperty("cron", "0 9 * * *");
    expect(remindate("every days")).toHaveProperty("cron", "0 9 * * *");
    expect(remindate("every 2 days")).toHaveProperty("cron", "0 9 */2 * *");
    expect(remindate("every 3 days")).toHaveProperty("cron", "0 9 */3 * *");
    expect(remindate("every 30 days")).toHaveProperty("cron", "0 9 */30 * *");
    expect(remindate("every day at 10 pm")).toHaveProperty("cron", "0 22 * * *");
    expect(remindate("every day at 10:30 pm")).toHaveProperty("cron", "30 22 * * *");

    // case insensitivity check
    expect(remindate("every DAY")).toHaveProperty("cron", "0 9 * * *");
  });

  test("every month", () => {
    expect(remindate("every month")).toHaveProperty("cron", "0 9 1 * *");
    expect(remindate("every 2 months")).toHaveProperty("cron", "0 9 1 */2 *");
    expect(remindate("every 3 months")).toHaveProperty("cron", "0 9 1 */3 *");
  });

  test("every week", () => {
    expect(remindate("every week")).toHaveProperty("cron", "0 9 * * 1");
    expect(remindate("every weekday")).toHaveProperty("cron", "0 9 * * 1-5");
    expect(remindate("on weekdays")).toHaveProperty("cron", "0 9 * * 1-5");
    expect(remindate("every weekend")).toHaveProperty("cron", "0 9 * * 6");
    expect(remindate("on weekends")).toHaveProperty("cron", "0 9 * * 6");

    expect(remindate("every sunday")).toHaveProperty("cron", "0 9 * * 0");
    expect(remindate("every monday")).toHaveProperty("cron", "0 9 * * 1");
    expect(remindate("every tuesday")).toHaveProperty("cron", "0 9 * * 2");
    expect(remindate("every wednesday")).toHaveProperty("cron", "0 9 * * 3");
    expect(remindate("every thursday")).toHaveProperty("cron", "0 9 * * 4");
    expect(remindate("every friday")).toHaveProperty("cron", "0 9 * * 5");
    expect(remindate("every saturday")).toHaveProperty("cron", "0 9 * * 6");

    expect(remindate("on sundays")).toHaveProperty("cron", "0 9 * * 0");
    expect(remindate("on mondays")).toHaveProperty("cron", "0 9 * * 1");
    expect(remindate("on tuesdays")).toHaveProperty("cron", "0 9 * * 2");
    expect(remindate("on wednesdays")).toHaveProperty("cron", "0 9 * * 3");
    expect(remindate("on thursdays")).toHaveProperty("cron", "0 9 * * 4");
    expect(remindate("on fridays")).toHaveProperty("cron", "0 9 * * 5");
    expect(remindate("on saturdays")).toHaveProperty("cron", "0 9 * * 6");
    expect(remindate("on saturdays")).toHaveProperty("cron", "0 9 * * 6");
  });
});
