//for-of-loop difference between of and in along with let and const
//consider an array
incomes=['20000','90000','80000']
for(let income of incomes)
{   income=income+1;
    console.log(income)
}
//you cannot increment in income if you define income as constant : therefore if increment is your option then use let or var to increment.