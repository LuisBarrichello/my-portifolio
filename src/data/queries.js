const queries = {
    languageStats: `
        query languageStats($username: String!) {
            matchedUser(username: $username) {
                languageProblemCount {
                    languageName
                    problemsSolved
                }
            }
        }
    `,
    skillStats: `
    query skillStats($username: String!) {
        matchedUser(username: $username) {
          tagProblemCounts {
            advanced {
              tagName
              tagSlug
              problemsSolved
            }
            intermediate {
              tagName
              tagSlug
              problemsSolved
            }
            fundamental {
              tagName
              tagSlug
              problemsSolved
            }
          }
        }
      }
    `,
    userPublicProfile: `
    query userPublicProfile($username: String!) {
        matchedUser(username: $username) {
          contestBadge {
            name
            expired
            hoverText
            icon
          }
          username
          githubUrl
          twitterUrl
          linkedinUrl
          profile {
            ranking
            userAvatar
            realName
            aboutMe
            school
            websites
            countryName
            company
            jobTitle
            skillTags
            postViewCount
            postViewCountDiff
            reputation
            reputationDiff
            solutionCount
            solutionCountDiff
            categoryDiscussCount
            categoryDiscussCountDiff
          }
        }
      }`,
    userProblemsSolved: `
    query userProblemsSolved($username: String!) {
        allQuestionsCount {
          difficulty
          count
        }
        matchedUser(username: $username) {
          problemsSolvedBeatsStats {
            difficulty
            percentage
          }
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }`,
};

export default queries