// class ApiFeatures {
//     constructor(query, queryStr) {
//       this.query = query;
//       this.queryStr = queryStr;
//     }
  
//     search() {
//       const keyword = this.queryStr.keyword
//         ? {
//             name: {
//               $regex: this.queryStr.keyword,
//               $options: "i",
//             },
//           }
//         : {};

//         console.log(keyword);
  
//       this.query = this.query.find({ ...keyword });
//       return this;
//     }
  
//     filter() {
//       const queryCopy = { ...this.queryStr };
//       console.log(queryCopy);
//       //   Removing some fields for category
//       const removeFields = ["keyword", "page", "limit"];
  
//       removeFields.forEach((key) => delete queryCopy[key]);
//       console.log(queryCopy);
//       // Filter For Price and Rating
  
//       let queryStr = JSON.stringify(queryCopy);
//       queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
  
//       this.query = this.query.find(JSON.parse(queryStr));
  
//       return this;
//     }
  
//     pagination(resultPerPage) {
//       const currentPage = Number(this.queryStr.page) || 1;
  
//       const skip = resultPerPage * (currentPage - 1);
  
//       this.query = this.query.limit(resultPerPage).skip(skip);
  
//       return this;
//     }
// }
  
  
// module.exports = ApiFeatures;






class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    //   Removing some fields for category
    const removeFields = ["keyword", "page", "limit"];

    removeFields.forEach((key) => delete queryCopy[key]);

    // Filter For Price and Rating

    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }


  // filter() {
  //   const removeFields = ["keyword", "page", "limit"];
  //   const queryCopy = { ...this.queryStr };

  //   removeFields.forEach((key) => delete queryCopy[key]);

  //   const filteredQuery = JSON.stringify(queryCopy).replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
  //   this.query = this.query.find(JSON.parse(filteredQuery));

  //   return this;
  // }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;

    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);

    return this;
  }


  // pagination(resultPerPage) {
  //   const currentPage = Number(this.queryStr.page) || 1;

  //   if (isNaN(currentPage) || currentPage < 1) {
  //     throw new Error("Invalid page number");
  //   }

  //   const skip = resultPerPage * (currentPage - 1);
  //   this.query = this.query.limit(resultPerPage).skip(skip);

  //   return this;
  // }
}


module.exports = ApiFeatures;
