import formatter from "format-number";
import chalk from "chalk";

const format = (num) => formatter()(num.toFixed(0));
const seperator = () =>
  console.log("--------------------------------------------------");

const calcInvestment = ({ revenuePercentage, years, amount }) => {
  let sum = 0;

  const revenue = (revenuePercentage + 100) / 100;

  const initial = amount * years;

  for (let index = 0; index < years; index++) {
    sum += amount;
    sum *= revenue;
  }

  const totalInvestment = sum;
  const profit = sum - initial;

  const tax = (sum - initial) * 0.25;
  const profitTax = (sum - initial) * 0.75;
  const totalInvestmentTax = totalInvestment - tax;

  seperator();

  console.log(
    `Investing ${chalk.blue(format(amount))} for ${chalk.blue(
      years
    )} years with ${chalk.blue(revenuePercentage + "%")} revenue`
  );

  seperator();

  console.log(chalk.cyan(`initial - ${format(initial)}`));
  console.log(chalk.green(`total investment - ${format(totalInvestment)}`));

  seperator();

  console.log(chalk.yellow(`profit - ${format(profit)}`));
  console.log(chalk.red(`tax - ${format(tax)}`));

  seperator();

  console.log(
    chalk.dim(
      `profit with tax - ${chalk.bgGreen(chalk.black(format(profitTax)))}`
    )
  );
  console.log(
    chalk.dim(
      `total investment with tax - ${chalk.bgCyan(
        chalk.black(format(totalInvestmentTax))
      )}`
    )
  );

  seperator();
};

calcInvestment({ revenuePercentage: 10, years: 16, amount: 71_000 });
