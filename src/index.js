module.exports = function solveSudoku(matrix) {
    let solvedSudoku = matrix;
    let findZero = 0;
    let ffzero = 0;
    
  do {
    findZero = 0;
      
  let nums = [];
  let row = [];
  let col = [];
  let row33 = 0;
  let col33 = 0;
  for (let i=0; i<9; i++) {
    nums[i] = [];
    for (let j=0; j<9; j++) {
      if (solvedSudoku[i][j] == 0) {
        findZero = 1;
        row[i] = solvedSudoku[i];
        row33 = Math.floor(i/3) * 3;
        for (let k=0; k<9; k++) {
          col[k] = solvedSudoku[k][j];
        }
        col33 = Math.floor(j/3) * 3;
        let cell33 = '';
        for (let r=0; r<3; r++) {
          for (let c=0; c<3; c++) {
            cell33 += solvedSudoku[row33+r][col33+c] + '';
          }
        }
        
        let possibleNums = '';
        for (let p=1; p<=9; p++) {
          if ((row[i].indexOf(p) == -1) && (col.indexOf(p) == -1) && (cell33.indexOf(p) == -1)) {
            possibleNums += p + '';
           }
        }
        nums[i][j] = possibleNums;
        if (nums[i][j].length == 1) {
              solvedSudoku[i][j] = parseInt(nums[i][j],10);
        }

      }
    }	
  }
  






  let numsjoinh = [];
  for (let i=0; i<27; i+=3) {
      numsjoinh[i] = nums[Math.round(i/3)].slice(0, 3).join();
      numsjoinh[i+1] = nums[Math.round(i/3)].slice(3, 6).join();
      numsjoinh[i+2] = nums[Math.round(i/3)].slice(6, 9).join();
  }


  let numsjoinv = [];
  for (let i=0; i<27; i+=3) {
      numsjoinv[i] = nums[0][Math.round(i/3)] + ',' + nums[1][Math.round(i/3)] + ',' + nums[2][Math.round(i/3)];
      numsjoinv[i+1] = nums[3][Math.round(i/3)] + ',' + nums[4][Math.round(i/3)] + ',' + nums[5][Math.round(i/3)];
      numsjoinv[i+2] = nums[6][Math.round(i/3)] + ',' + nums[7][Math.round(i/3)] + ',' + nums[8][Math.round(i/3)];
  }
  

  let cmin1 = 0;
  let cmin2 = 0;
  let cmax1 = 0;
  let cmax2 = 0;

  for (let i=0; i<3; i++) {
    for (let n=1; n<=9; n++) {
      if (i == 0) {cmin1=3; cmax1=6; cmin2=6; cmax2=9;}
	    if (i == 1) {cmin1=0; cmax1=3; cmin2=6; cmax2=9;}
	    if (i == 2) {cmin1=0; cmax1=3; cmin2=3; cmax2=6;}
      if (numsjoinh[i].indexOf(n) !== -1 && numsjoinh[i+3].indexOf(n) == -1 && numsjoinh[i+6].indexOf(n) == -1) {
        for (let ic=cmin1; ic<cmax1; ic++) {
          if (nums[0][ic] !== undefined) {
            nums[0][ic] = nums[0][ic].replace(n, '');
          }
        }
        for (let ic=cmin2; ic<cmax2; ic++) {
          if (nums[0][ic] !== undefined) {
            nums[0][ic] = nums[0][ic].replace(n, '');
          }
        }
      }
      if (numsjoinh[i].indexOf(n) == -1 && numsjoinh[i+3].indexOf(n) !== -1 && numsjoinh[i+6].indexOf(n) == -1) {
        for (let ic=cmin1; ic<cmax1; ic++) {
          if (nums[1][ic] !== undefined) {
            nums[1][ic] = nums[1][ic].replace(n, '');
          }
        }
        for (let ic=cmin2; ic<cmax2; ic++) {
          if (nums[1][ic] !== undefined) {
            nums[1][ic] = nums[1][ic].replace(n, '');
          }
        }
      }
      if (numsjoinh[i].indexOf(n) == -1 && numsjoinh[i+3].indexOf(n) == -1 && numsjoinh[i+6].indexOf(n) !== -1) {
        for (let ic=cmin1; ic<cmax1; ic++) {
          if (nums[2][ic] !== undefined) {
            nums[2][ic] = nums[2][ic].replace(n, '');
          }
        }
        for (let ic=cmin2; ic<cmax2; ic++) {
          if (nums[2][ic] !== undefined) {
            nums[2][ic] = nums[2][ic].replace(n, '');
          }
        }
      }
    }
  }


  for (let i=9; i<12; i++) {
    for (let n=1; n<=9; n++) {
      if (i%9 == 0) {cmin1=3; cmax1=6; cmin2=6; cmax2=9;}
	    if (i%9 == 1) {cmin1=0; cmax1=3; cmin2=6; cmax2=9;}
	    if (i%9 == 2) {cmin1=0; cmax1=3; cmin2=3; cmax2=6;}
      if (numsjoinh[i].indexOf(n) !== -1 && numsjoinh[i+3].indexOf(n) == -1 && numsjoinh[i+6].indexOf(n) == -1) {
        for (let ic=cmin1; ic<cmax1; ic++) {
          if (nums[3][ic] !== undefined) {
            nums[3][ic] = nums[3][ic].replace(n, '');
          }
        }
        for (let ic=cmin2; ic<cmax2; ic++) {
          if (nums[3][ic] !== undefined) {
            nums[3][ic] = nums[3][ic].replace(n, '');
          }
        }
      }
      if (numsjoinh[i].indexOf(n) == -1 && numsjoinh[i+3].indexOf(n) !== -1 && numsjoinh[i+6].indexOf(n) == -1) {
        for (let ic=cmin1; ic<cmax1; ic++) {
          if (nums[4][ic] !== undefined) {
            nums[4][ic] = nums[4][ic].replace(n, '');
          }
        }
        for (let ic=cmin2; ic<cmax2; ic++) {
          if (nums[4][ic] !== undefined) {
            nums[4][ic] = nums[4][ic].replace(n, '');
          }
        }
      }
      if (numsjoinh[i].indexOf(n) == -1 && numsjoinh[i+3].indexOf(n) == -1 && numsjoinh[i+6].indexOf(n) !== -1) {
        for (let ic=cmin1; ic<cmax1; ic++) {
          if (nums[5][ic] !== undefined) {
            nums[5][ic] = nums[5][ic].replace(n, '');
          }
        }
        for (let ic=cmin2; ic<cmax2; ic++) {
          if (nums[5][ic] !== undefined) {
            nums[5][ic] = nums[5][ic].replace(n, '');
          }
        }
      }
    }
  }
  

  for (let i=18; i<21; i++) {
    for (let n=1; n<=9; n++) {
      if (i%9 == 0) {cmin1=3; cmax1=6; cmin2=6; cmax2=9;}
	    if (i%9 == 1) {cmin1=0; cmax1=3; cmin2=6; cmax2=9;}
	    if (i%9 == 2) {cmin1=0; cmax1=3; cmin2=3; cmax2=6;}
      if (numsjoinh[i].indexOf(n) !== -1 && numsjoinh[i+3].indexOf(n) == -1 && numsjoinh[i+6].indexOf(n) == -1) {
        for (let ic=cmin1; ic<cmax1; ic++) {
          if (nums[6][ic] !== undefined) {
            nums[6][ic] = nums[6][ic].replace(n, '');
          }
        }
        for (let ic=cmin2; ic<cmax2; ic++) {
          if (nums[6][ic] !== undefined) {
            nums[6][ic] = nums[6][ic].replace(n, '');
          }
        }
      }
      if (numsjoinh[i].indexOf(n) == -1 && numsjoinh[i+3].indexOf(n) !== -1 && numsjoinh[i+6].indexOf(n) == -1) {
        for (let ic=cmin1; ic<cmax1; ic++) {
          if (nums[7][ic] !== undefined) {
            nums[7][ic] = nums[7][ic].replace(n, '');
          }
        }
        for (let ic=cmin2; ic<cmax2; ic++) {
          if (nums[7][ic] !== undefined) {
            nums[7][ic] = nums[7][ic].replace(n, '');
          }
        }
      }
      if (numsjoinh[i].indexOf(n) == -1 && numsjoinh[i+3].indexOf(n) == -1 && numsjoinh[i+6].indexOf(n) !== -1) {
        for (let ic=cmin1; ic<cmax1; ic++) {
          if (nums[8][ic] !== undefined) {
            nums[8][ic] = nums[8][ic].replace(n, '');
          }
        }
        for (let ic=cmin2; ic<cmax2; ic++) {
          if (nums[8][ic] !== undefined) {
            nums[8][ic] = nums[8][ic].replace(n, '');
          }
        }
      }
    }
  }






  for (let i=0; i<3; i++) {
    for (let n=1; n<=9; n++) {
      if (i == 0) {cmin1=3; cmax1=6; cmin2=6; cmax2=9;}
	    if (i == 1) {cmin1=0; cmax1=3; cmin2=6; cmax2=9;}
	    if (i == 2) {cmin1=0; cmax1=3; cmin2=3; cmax2=6;}
      if (numsjoinv[i].indexOf(n) !== -1 && numsjoinv[i+3].indexOf(n) == -1 && numsjoinv[i+6].indexOf(n) == -1) {
        for (let ic=cmin1; ic<cmax1; ic++) {
          if (nums[ic][0] !== undefined) {
            nums[ic][0] = nums[ic][0].replace(n, '');
          }
        }
        for (let ic=cmin2; ic<cmax2; ic++) {
          if (nums[ic][0] !== undefined) {
            nums[ic][0] = nums[ic][0].replace(n, '');
          }
        }
      }
      if (numsjoinv[i].indexOf(n) == -1 && numsjoinv[i+3].indexOf(n) !== -1 && numsjoinv[i+6].indexOf(n) == -1) {
        for (let ic=cmin1; ic<cmax1; ic++) {
          if (nums[ic][1] !== undefined) {
            nums[ic][1] = nums[ic][1].replace(n, '');
          }
        }
        for (let ic=cmin2; ic<cmax2; ic++) {
          if (nums[ic][1] !== undefined) {
            nums[ic][1] = nums[ic][1].replace(n, '');
          }
        }
      }
      if (numsjoinv[i].indexOf(n) == -1 && numsjoinv[i+3].indexOf(n) == -1 && numsjoinv[i+6].indexOf(n) !== -1) {
        for (let ic=cmin1; ic<cmax1; ic++) {
          if (nums[ic][2] !== undefined) {
            nums[ic][2] = nums[ic][2].replace(n, '');
          }
        }
        for (let ic=cmin2; ic<cmax2; ic++) {
          if (nums[ic][2] !== undefined) {
            nums[ic][2] = nums[ic][2].replace(n, '');
          }
        }
      }
    }
  }


  for (let i=9; i<12; i++) {
    for (let n=1; n<=9; n++) {
      if (i%9 == 0) {cmin1=3; cmax1=6; cmin2=6; cmax2=9;}
	    if (i%9 == 1) {cmin1=0; cmax1=3; cmin2=6; cmax2=9;}
	    if (i%9 == 2) {cmin1=0; cmax1=3; cmin2=3; cmax2=6;}
      if (numsjoinv[i].indexOf(n) !== -1 && numsjoinv[i+3].indexOf(n) == -1 && numsjoinv[i+6].indexOf(n) == -1) {
        for (let ic=cmin1; ic<cmax1; ic++) {
          if (nums[ic][3] !== undefined) {
            nums[ic][3] = nums[ic][3].replace(n, '');
          }
        }
        for (let ic=cmin2; ic<cmax2; ic++) {
          if (nums[ic][3] !== undefined) {
            nums[ic][3] = nums[ic][3].replace(n, '');
          }
        }
      }
      if (numsjoinv[i].indexOf(n) == -1 && numsjoinv[i+3].indexOf(n) !== -1 && numsjoinv[i+6].indexOf(n) == -1) {
        for (let ic=cmin1; ic<cmax1; ic++) {
          if (nums[ic][4] !== undefined) {
            nums[ic][4] = nums[ic][4].replace(n, '');
          }
        }
        for (let ic=cmin2; ic<cmax2; ic++) {
          if (nums[ic][4] !== undefined) {
            nums[ic][4] = nums[ic][4].replace(n, '');
          }
        }
      }
      if (numsjoinv[i].indexOf(n) == -1 && numsjoinv[i+3].indexOf(n) == -1 && numsjoinv[i+6].indexOf(n) !== -1) {
        for (let ic=cmin1; ic<cmax1; ic++) {
          if (nums[ic][5] !== undefined) {
            nums[ic][5] = nums[ic][5].replace(n, '');
          }
        }
        for (let ic=cmin2; ic<cmax2; ic++) {
          if (nums[ic][5] !== undefined) {
            nums[ic][5] = nums[ic][5].replace(n, '');
          }
        }
      }
    }
  }
  

  for (let i=18; i<21; i++) {
    for (let n=1; n<=9; n++) {
      if (i%9 == 0) {cmin1=3; cmax1=6; cmin2=6; cmax2=9;}
	    if (i%9 == 1) {cmin1=0; cmax1=3; cmin2=6; cmax2=9;}
	    if (i%9 == 2) {cmin1=0; cmax1=3; cmin2=3; cmax2=6;}
      if (numsjoinv[i].indexOf(n) !== -1 && numsjoinv[i+3].indexOf(n) == -1 && numsjoinv[i+6].indexOf(n) == -1) {
        for (let ic=cmin1; ic<cmax1; ic++) {
          if (nums[ic][6] !== undefined) {
            nums[ic][6] = nums[ic][6].replace(n, '');
          }
        }
        for (let ic=cmin2; ic<cmax2; ic++) {
          if (nums[ic][6] !== undefined) {
            nums[ic][6] = nums[ic][6].replace(n, '');
          }
        }
      }
      if (numsjoinv[i].indexOf(n) == -1 && numsjoinv[i+3].indexOf(n) !== -1 && numsjoinv[i+6].indexOf(n) == -1) {
        for (let ic=cmin1; ic<cmax1; ic++) {
          if (nums[ic][7] !== undefined) {
            nums[ic][7] = nums[ic][7].replace(n, '');
          }
        }
        for (let ic=cmin2; ic<cmax2; ic++) {
          if (nums[ic][7] !== undefined) {
            nums[ic][7] = nums[ic][7].replace(n, '');
          }
        }
      }
      if (numsjoinv[i].indexOf(n) == -1 && numsjoinv[i+3].indexOf(n) == -1 && numsjoinv[i+6].indexOf(n) !== -1) {
        for (let ic=cmin1; ic<cmax1; ic++) {
          if (nums[ic][8] !== undefined) {
            nums[ic][8] = nums[ic][8].replace(n, '');
          }
        }
        for (let ic=cmin2; ic<cmax2; ic++) {
          if (nums[ic][8] !== undefined) {
            nums[ic][8] = nums[ic][8].replace(n, '');
          }
        }
      }
    }
  }



  

  let count = [];
  let count3 = [];
  let numsCol = [];
  let nums33 = [];
  
  for (let ri=0; ri<9; ri++) {
    count[ri] = 0;
    for (let ci=0; ci<9; ci++) {
        numsCol[ci] = nums[ci][ri];
      for (let r33=0; r33<3; r33++) {
        nums33[r33] = [];
        for (let c33=0; c33<3; c33++) {
          nums33[r33][c33] = nums[r33 + Math.floor(ri/3)*3][c33 + Math.floor(ci/3)*3];
          if (nums33[r33][c33] === undefined) {
            nums33[r33][c33] = '';
          }
        }
      }
       
      for (let n33=1; n33<=9; n33++) {
        let countNums = 0;
        for (let r333=0; r333<3; r333++) {
          for (let c333=0; c333<3; c333++) {
            if (nums33[r333][c333].indexOf(n33) !== -1) {
                  countNums++;
            }
            count3[n33-1] = countNums;
          }
        }
      }
  
        
        if (ri%3 === 0) {
          if (ci%3 ===0) {
            for (let rj=0; rj<3; rj++) {
              for (let cj=0; cj<3; cj++) {
                let a=count3.indexOf(1)+1;
                if (nums33[rj][cj] !== '') {
                  if (a !== undefined) {
                    if (nums33[rj][cj].indexOf(a) !== -1) {
                      if (solvedSudoku[ri+rj][ci+cj] === 0) {
                        solvedSudoku[ri+rj][ci+cj] = a;
                      }
                    }
                  }
                
                }
              }
            }
  
          }
        }
      }
  
   

        for (let n=1; n<=9; n++) {
          let countNums1 = 0;
          for (let rc=0; rc<9; rc++) {
          
            if ((nums[ri][rc] !== undefined && nums[ri][rc].indexOf(n) !== -1) || (numsCol[rc] !== undefined && numsCol[rc].indexOf(n) !== -1)) {
              countNums1++;
            }
            count[n-1] = countNums1;
          }
        }
        
  
            for (let cjg=0; cjg<9; cjg++) {
              let ag=count.indexOf(1)+1;
              if (ag !== undefined && nums[ri][cjg] !== undefined) {
                if (nums[ri][cjg].indexOf(ag) !== -1) {
                  if (solvedSudoku[ri][cjg] === 0) {
                    solvedSudoku[ri][cjg] = ag;
                  }
                }
              }
              else if (ag !== undefined && numsCol[cjg] !== undefined) {
                if (numsCol[cjg].indexOf(ag) !== -1) {
                  if (solvedSudoku[cjg][ri] === 0) {
                    solvedSudoku[cjg][ri] = ag;
                  }
                }
              }
            }
        }
  
   for (let r=0; r<9; r++) {
    findZero += solvedSudoku[r].indexOf(0);
  }

  if (findZero == 0) {
    break;
  }
      ffzero++;
            
      //  } while (findZero > 0);
    } while (ffzero < 11);
    
    // console.log(solvedSudoku);
    return solvedSudoku;
  }